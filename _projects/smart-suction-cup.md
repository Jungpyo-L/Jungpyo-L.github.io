---
layout: project
title: Smart Suction Cup
description: Multi-chamber suction end effector with internal airflow sensing and haptic search for robust industrial grasping. UC Berkeley, Embodied Dexterity Group.
importance: 1
category: Robotics
img: assets/img/publication_preview/Preview_HapticSearch.gif
---

## The Smart Suction Cup

The Smart Suction Cup is a multi-chambered end effector in which each internal chamber is connected to a pressure sensor, enabling real-time monitoring of airflow changes during suction actuation. Rather than instrumenting the contact surface with additional tactile sensors, the system treats **suction itself as a sensing modality**: chamber pressures reveal how well the cup is sealed against an object surface.

This design targets the central challenge in suction grasping—**air sealing**—without adding electronics or extra sensors on the cup face. The cup body is fabricated as a multi-chamber pneumatic structure; each chamber is plumbed to a remote pressure sensor so that no electronics sit on the contact face. This keeps the end effector easy to manufacture, replace, and use in contact-rich tasks without risking damage to fragile on-cup instrumentation.

The baseline design uses four internal chambers. We have since developed **3- and 6-chamber variants** to study how chamber geometry affects sensing resolution and control performance.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Fabrication_Integration.png" title="Smart Suction Cup fabrication and system integration" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Haptic Search

Traditionally, suction grasping has relied heavily on vision to identify optimal grasp locations. Vision-based methods can fail when camera resolution is limited, visual artifacts are present, or object surfaces are complex or adversarial.

When a vision-based grasp planner proposes a pose that fails to form a reliable seal, internal pressure measurements indicate where air leakage occurs. The robot can then adjust its pose toward regions of higher vacuum, using tactile (pressure) feedback to search for a better grasp point. We call this process the **haptic search algorithm**.

By measuring airflow in each chamber, haptic search complements vision in settings where visual grasp estimates are unreliable—recovering from failed seals and guiding the robot toward poses that improve suction performance.

As shown in the videos below, when the cup is near an object **edge**, haptic search drives **lateral** motion to move inward toward the object surface. When **rotational alignment** is off, the robot adjusts its orientation to match the **surface normal**. These adjustments refine the robot pose until suction sealing improves.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Lateral.gif" title="Lateral haptic search" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Rotation.gif" title="Rotational haptic search" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Demonstrations

### Bin-picking with adversarial objects

We implemented haptic search in a pick-and-place bin-picking task using **19 adversarial objects** deliberately chosen to be **hard to capture with a vision system**. Guided by internal flow measurements, model-based haptic search improved grasp success by up to **2.5×** compared with a state-of-the-art vision-only baseline (Dex-Net 4.0). This work was published in *IEEE Transactions on Robotics* (T-RO) and was selected as an **Editor's Choice** article by *Science Robotics*.

<div class="row project-media-paired align-items-end">
  <div class="col-12 col-sm project-media-paired__gif mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Bin_picking.gif" title="Bin-picking with haptic search" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-12 col-sm project-media-paired__png mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Bin_picking_result.png" title="Bin-picking success rate comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### PCB regrasping on a conveyor belt system

<div class="row align-items-center">
  <div class="col-md-7">
    <p>Building on the same haptic search framework, we applied the Smart Suction Cup to <strong>regrasping printed circuit boards (PCBs)</strong> in an industrial recycling context—a collaborative project with Prof. Fei Chen at CUHK (as required by innoHK's collaboration policy). Waste PCBs are difficult to grip reliably because of uneven surfaces and unmodeled surface-mounted components that disrupt suction sealing. We studied regrasping on both stationary setups and <strong>conveyor belt systems</strong> with realistic vision-based grasp planners, demonstrating improved pick-and-place success in an industrial recycling workflow. This work was published at <strong>ICRA 2024</strong>.</p>
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/PCB_regrasping.gif" title="PCB regrasping on a conveyor belt" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### Object contour following

<div class="row align-items-center">
  <div class="col-md-7">
    <p>Beyond recovering from failed grasps, we extended the system to <strong>contour following</strong>—using chamber pressure feedback to track edges and planar contours on object surfaces. Because the sensor relies on internal airflow rather than vision or wear-prone contact transducers, it remains useful under occlusions and during sustained sliding contact. Experimental validation showed robust edge tracking at speeds up to <strong>3 cm/s</strong>. This work was published at <strong>IROS 2024</strong>.</p>
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/smart-suction-cup/Contour_Following.gif" title="Haptic contour following" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Co-design of suction cup structure and haptic search control

We are extending the Smart Suction Cup along two coupled directions: **multi-chamber mechanical design** and **haptic search control policy**. Different chamber layouts change what leakage patterns the sensors can observe, which in turn changes what control strategies are most effective.

To support this, we built a **simulation environment** for multi-chambered suction cups and collected data to study how sensor geometry and control policy should be designed together. The goal is co-design: jointly optimizing cup structure and haptic search controllers to improve adaptability across grasping tasks. This line of work is currently under review.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[project=smart-suction-cup]* %}

</div>
