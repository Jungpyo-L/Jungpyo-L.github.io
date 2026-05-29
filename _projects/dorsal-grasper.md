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

Injuries to the **cervical spinal cord** at the **C5–C7** levels can preserve shoulder and elbow function while limiting voluntary **finger and wrist flexion**. As a result, many people in this population cannot form a conventional power grasp with the palmar side of the hand alone.

A common compensatory strategy is **tenodesis grasp**: wrist extension passively closes the fingers through tendon coupling. Tenodesis remains useful for **small, lightweight** objects but is often **insufficient for heavier items** or tasks that require stable, forceful manipulation.

Most wearable assistive devices **actuate the user’s own fingers** through an exoskeleton. These systems can be effective but are often sensitive to **anatomical variability**—hand size, joint contractures, and changes in limb posture—which complicates fitting, comfort, and reliable daily use.

## The Dorsal Grasper

The **Dorsal Grasper** is a wearable assistive device that adds **supernumerary fingers** and an **artificial palm** on the **back of the hand** and forearm, rather than driving the user’s native fingers. It is designed for people with **C5–C7 spinal cord injury** who retain **voluntary wrist extension** after injury.

The user initiates a grasp with wrist extension—the same motion used in tenodesis—while the device’s V-shaped soft fingers and dorsal palm provide **power-wrap** and **adduction pinch** on the object. The person and the device **share the grasp**: the user applies force through the back of the hand while the supernumerary fingers complete and stabilize the hold.

This human–robot collaborative approach expands the **functional grasp workspace**, reduces compensatory **trunk motion** (especially when reaching from a wheelchair), and complements existing strategies rather than replacing them entirely.

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

### Bypassing intent detection

Many assistive grasp systems rely on **explicit intent inference**—for example, from EMG, gaze, or brain–machine interfaces—to decide when to open or close the hand. The Dorsal Grasper **does not require a separate intent-decoding stage**. Grasp initiation maps directly to **wrist extension**, a motion the user already controls voluntarily. That keeps interaction **simple, predictable, and low-latency** for activities of daily living.

### Proprioceptive force feedback

Because the user actively presses the object against the **dorsal palm** and supernumerary fingers, grasp force is mediated through the user’s own **proprioception** and residual arm mechanics—not only through open-loop exoskeleton actuation. The user can **feel and modulate** how hard they are pushing, which supports more intuitive force regulation than fully automated finger actuation alone.

### Reduced bimanual reliance

With a stable grasp formed on the back of the hand, users can manipulate objects with **less dependence on a second hand** for stabilization or setup. In practice, this can reduce the need for **bimanual compensatory strategies** and make single-handed functional tasks more feasible within the expanded workspace.

## Passive Dorsal Grasper

We later developed a **Passive Dorsal Grasper**—a **stowable**, largely **passive** variant of the same supernumerary dorsal grasping concept. It preserves the core idea of using the back of the hand for collaborative grasping while simplifying the hardware for wearability, donning, and everyday use when powered actuation is not required.

## Ongoing work

We are extending this line in two directions currently **under review**:

- **Dorsal Grasper 3.0**, evaluated together with the Passive Dorsal Grasper in **unstructured daily environments**, using a multi-dimensional assessment of assistive wearable grasping outside controlled lab setups.
- The **Passive Dorsal Grasper** design itself, focused on **stowable passive supernumerary dorsal grasping** for practical deployment.

## Related publications

<div class="publications">

{% bibliography --group_by none --query @*[project=dorsal-grasper]* %}

</div>
