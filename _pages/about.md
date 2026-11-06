---
layout: about
title: about
permalink: /
subtitle: Robotics, Mechanical Design, Grasping and Manipulation, Human-Robot Interaction, Brain Machine Interface

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>2111A Etcheverry</p>
    <p>2521 Hearst Ave</p>
    <p>Berkeley, CA 94709</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="bio-switcher" role="tablist" aria-label="Bio length">
  <button type="button" role="tab" id="bio-tab-short" aria-controls="bio-short" aria-selected="true">Short</button>
  <button type="button" role="tab" id="bio-tab-long" aria-controls="bio-long" aria-selected="false">Long</button>
  <button type="button" role="tab" id="bio-tab-speaker" aria-controls="bio-speaker" aria-selected="false">Speaker</button>
</div>

<div class="bio-panel" id="bio-short" role="tabpanel" aria-labelledby="bio-tab-short">
  <p>
    I am a postdoctoral scholar in the <a href="https://edg.berkeley.edu/">Embodied Dexterity Group</a> at UC Berkeley, where I completed my Ph.D. in mechanical engineering in 2024. My research focuses on robotic grasping and manipulation, tactile sensing, and wearable assistive devices — building physical systems whose hardware does much of the work, so that robots and people can grasp reliably in the real world.
  </p>
  <p>
    More detail on my background and publications is on the <a href="/cv/">CV</a> and <a href="/publications/">publications</a> pages. I am happy to connect — see the links below.
  </p>
</div>

<div class="bio-panel" id="bio-long" role="tabpanel" aria-labelledby="bio-tab-long" hidden>
  <p>
    My path into robotics started with the brain. At Yonsei University and the Korea Institute of Science and Technology (KIST), I built MEMS devices to record from and stimulate neural circuits, and I also helped build the structural and thermal systems of the CANYVAL-X CubeSat mission with NASA GSFC. Working on these systems showed me how much carefully designed hardware can do on its own.
  </p>
  <p>
    Since 2019, I have been at UC Berkeley in Prof. Hannah Stuart's <a href="https://edg.berkeley.edu/">Embodied Dexterity Group</a>, first as a Ph.D. student and now as a postdoctoral scholar. My research asks how robots and people can grasp more reliably by building intelligence into the design itself: the <a href="/projects/smart-suction-cup/">Smart Suction Cup</a> turns airflow into a tactile sensor so a gripper can feel its way to a secure seal, and the <a href="/projects/dorsal-grasper/">Dorsal Grasper</a> gives people with C5–C7 spinal cord injury a strong grasp using the back of the hand. I want these systems to leave the lab and work in factories, homes, and daily life.
  </p>
</div>

<div class="bio-panel" id="bio-speaker" role="tabpanel" aria-labelledby="bio-tab-speaker" hidden>
  <div class="bio-speaker-note">
    <span>Third-person bio for talk announcements and introductions.</span>
    <button type="button" id="bio-copy">Copy</button>
  </div>
  <div class="bio-speaker-text" id="bio-speaker-text">
    <p>
      Jungpyo Lee is a postdoctoral scholar in Mechanical Engineering at the University of California, Berkeley, where he received his Ph.D. in 2024 under the supervision of Prof. Hannah Stuart. His research focuses on design-centered intelligence for robotic grasping, tactile sensing, and human–robot collaboration, including the Smart Suction Cup and the Dorsal Grasper, a wearable device that helps people with spinal cord injury grasp everyday objects. He received his B.S. and M.S. degrees in Mechanical Engineering from Yonsei University, South Korea, and previously worked on brain–machine interfaces at the Korea Institute of Science and Technology (KIST).
    </p>
  </div>
</div>

<script>
  (function () {
    var tabs = document.querySelectorAll(".bio-switcher [role=tab]");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          var selected = t === tab;
          t.setAttribute("aria-selected", selected);
          document.getElementById(t.getAttribute("aria-controls")).hidden = !selected;
        });
      });
    });

    var copy = document.getElementById("bio-copy");
    copy.addEventListener("click", function () {
      var text = document.getElementById("bio-speaker-text").innerText.trim();
      navigator.clipboard.writeText(text).then(function () {
        copy.textContent = "Copied";
        setTimeout(function () {
          copy.textContent = "Copy";
        }, 1500);
      });
    });
  })();
</script>
