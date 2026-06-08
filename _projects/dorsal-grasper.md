---
layout: project
title: Dorsal Grasper
description: Wearable supernumerary grasping for people with C5–C7 spinal cord injury. UC Berkeley, Embodied Dexterity Group.
importance: 2
category: Robotics
img: assets/img/publication_preview/Preview_DG2.gif
model_viewer: true
---

## C5–C7 Cervical Spinal Cord Injury

<div class="row align-items-center">
  <div class="col-md-7">
    <p>Injuries to the <strong>cervical spinal cord</strong> at the <strong>C5–C7</strong> levels can preserve shoulder and elbow function while limiting voluntary <strong>finger and wrist flexion</strong>. As a result, many people in this population cannot form a conventional power grasp with the palmar side of the hand alone.</p>
    <p>A common compensatory strategy is <strong>tenodesis grasp</strong>: wrist extension passively closes the fingers through tendon coupling. Tenodesis remains useful for <strong>small, lightweight</strong> objects but is often <strong>insufficient for heavier items</strong> or tasks that require stable, forceful manipulation.</p>
    <p>Most wearable assistive devices <strong>actuate the user's own fingers</strong> through an exoskeleton. These systems can be effective but are often sensitive to <strong>anatomical variability</strong>—hand size, joint contractures, and changes in limb posture—which complicates fitting, comfort, and reliable daily use.</p>
  </div>
  <div class="col-md-5 mt-3 mt-md-0 text-center">
    {% include figure.liquid path="assets/img/projects/dorsal-grasper/tenodesis.jpg" title="Tenodesis grasp" class="img-fluid rounded z-depth-1 mx-auto" max-width="60%" %}
  </div>
</div>

## The Dorsal Grasper

The **Dorsal Grasper** is a wearable assistive device that adds **supernumerary fingers** and an **artificial palm** on the **back of the hand** and forearm, rather than driving the user’s native fingers. It is designed for people with **C5–C7 spinal cord injury** who retain **voluntary wrist extension** after injury.

The user initiates a grasp with wrist extension—the same motion used in tenodesis—while the device’s supernumerary fingers and dorsal palm provide **power-wrap** on the object. The person and the device **share the grasp**: the user applies force through the back of the hand while the supernumerary fingers complete and stabilize the hold.

This human–robot collaborative approach expands the **functional grasp workspace**, reduces compensatory **trunk motion** (especially when reaching from a wheelchair), and complements existing strategies rather than replacing them entirely.

The hardware has evolved across several generations. **Dorsal Grasper 1.0** introduced **V-shaped soft fingers**; later powered designs (**2.0** and **3.0**) use **parallel supernumerary fingers** for improved adaptability across object shapes and sizes. The **Passive Dorsal Grasper** has no electronics and **is stowable** when not in use.

<div class="row model-viewer-grid">
  <div class="col-6 col-lg-3">
    {% include model_viewer.liquid path="assets/models/dorsal-grasper/DorsalGrasper1.glb" caption="Dorsal Grasper 1.0" compact=true show_hint=false %}
  </div>
  <div class="col-6 col-lg-3">
    {% include model_viewer.liquid path="assets/models/dorsal-grasper/DorsalGrasper2.glb" caption="Dorsal Grasper 2.0" compact=true show_hint=false %}
  </div>
  <div class="col-6 col-lg-3">
    {% include model_viewer.liquid path="assets/models/dorsal-grasper/DorsalGrasper3.glb" caption="Dorsal Grasper 3.0" compact=true show_hint=false %}
  </div>
  <div class="col-6 col-lg-3">
    {% include model_viewer.liquid path="assets/models/dorsal-grasper/PassiveDorsalGrasper.glb" caption="Passive Dorsal Grasper" compact=true show_hint=false %}
  </div>
</div>
<p class="model-viewer-grid-hint">Drag to rotate · Scroll or pinch to zoom</p>

## Key advantages

### Complementary to tenodesis

Because the Dorsal Grasper grasps from the **back of the hand** rather than actuating the user's own fingers, the **palmar surface remains free** for conventional tenodesis grasping. Users can still rely on tenodesis for **small, lightweight** objects while turning to the Dorsal Grasper for heavier or less stable items—extending the grasp workspace without giving up an existing compensatory strategy.

### Bypassing intent detection

<div class="row align-items-center">
  <div class="col-md-7">
    <p>Many assistive grasp systems rely on <strong>explicit intent inference</strong>—for example, from EMG, gaze, or brain–machine interfaces—to decide when to open or close the hand, then issue commands and wait for actuation. The Dorsal Grasper <strong>does not require that pipeline</strong>. Grasp initiation maps directly to <strong>wrist extension</strong>, a motion the user already controls voluntarily.</p>
    <p>Because grasping is <strong>human–robot collaborative</strong>, the user stays in direct control throughout release. As shown in the video, they <strong>drop the object first</strong> by relaxing wrist extension, then <strong>open the supernumerary fingers with a joystick</strong>. That direct control avoids the multi-stage pipeline of intent detection, command generation, and actuation delay common in other assistive systems, keeping interaction <strong>simple, predictable, and low-latency</strong> for activities of daily living.</p>
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/dorsal-grasper/DG_cube_reduced_size.gif" title="Collaborative grasp and release via wrist extension" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### Proprioceptive force feedback

Because the user actively presses the object against the **dorsal palm** and supernumerary fingers, grasp force is mediated through the user’s own **proprioception** and residual arm mechanics—not only through open-loop exoskeleton actuation. The user can **feel and modulate** how hard they are pushing, which supports more intuitive force regulation than fully automated finger actuation alone.

### Reduced bimanual reliance

With a stable grasp formed on the back of the hand, users can manipulate objects with **less dependence on a second hand** for stabilization or setup. In practice, this can reduce the need for **bimanual compensatory strategies** and make single-handed functional tasks more feasible within the expanded workspace.

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/dorsal-grasper/Side_GRT_Bimanual_gif.gif" title="Grasp and Release Test — bimanual task" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/dorsal-grasper/Side_GRT_joystick_gif.gif" title="Grasp and Release Test — single-hand with joystick" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Passive Dorsal Grasper

<div class="row align-items-center">
  <div class="col-md-7">
    <p>We later developed a <strong>Passive Dorsal Grasper</strong>—a <strong>stowable</strong>, largely <strong>passive</strong> variant of the same supernumerary dorsal grasping concept. It preserves the core idea of using the back of the hand for collaborative grasping while simplifying the hardware for wearability, donning, and everyday use when powered actuation is not required.</p>
    <p>The design is <strong>lightweight and compact</strong>, without the bulk of powered actuation. When not in use, it can be <strong>stowed away</strong>—compact enough to tuck <strong>inside a shirt sleeve</strong>—so it stays out of the way during tasks that do not need assistive grasping. We expect this wearability to support better <strong>long-term usability</strong> outside the lab.</p>
    <p>Unlike the active versions, the supernumerary fingers are <strong>not actuated</strong>. Grasp force is therefore lower, and stable holds rely <strong>entirely on wrist extension</strong> rather than robotic finger closing. That trade-off reduces hardware complexity and daily burden, but limits the force and object range relative to powered Dorsal Graspers—a balance we are evaluating for practical deployment.</p>
  </div>
  <div class="col-md-5 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/dorsal-grasper/PassiveDG.gif" title="Passive Dorsal Grasper" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Ongoing work

We are extending this line in two directions currently **under review**:

- **Dorsal Grasper 3.0**, evaluated together with the Passive Dorsal Grasper in **unstructured daily environments**, using a multi-dimensional assessment of assistive wearable grasping outside controlled lab setups.
- The **Passive Dorsal Grasper** design itself, focused on **stowable passive supernumerary dorsal grasping** for practical deployment.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[project=dorsal-grasper]* %}

</div>
