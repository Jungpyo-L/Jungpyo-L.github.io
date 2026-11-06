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
    My path into robotics started with the brain. During my M.S. at Yonsei University and as a researcher at the Korea Institute of Science and Technology (KIST), I built MEMS devices to record from and stimulate neural circuits, including flexible electrode arrays and ultrasound transducers for neuromodulation. Along the way, I also helped build the structural and thermal systems of the CANYVAL-X CubeSat mission with NASA GSFC.
  </p>
  <p>
    I came to UC Berkeley in 2019 to join Prof. Hannah Stuart's <a href="https://edg.berkeley.edu/">Embodied Dexterity Group</a> and completed my Ph.D. in mechanical engineering in 2024. My research asks how robots and people can grasp more reliably by leveraging the intrinsic functionality of their hardware rather than adding complexity. The <a href="/projects/smart-suction-cup/">Smart Suction Cup</a> turns airflow into a tactile sensor so a gripper can feel its way to a secure seal, and the <a href="/projects/dorsal-grasper/">Dorsal Grasper</a> gives people with C5–C7 spinal cord injury a strong grasp using the back of the hand.
  </p>
  <p>
    Today, as a postdoctoral scholar, I continue to take these systems out of the lab and into factories, homes, and daily life, and I mentor students who want to build robots that work in the real world.
  </p>
</div>

<div class="bio-panel" id="bio-speaker" role="tabpanel" aria-labelledby="bio-tab-speaker" hidden>
  <div class="bio-speaker-note">
    <span>Third-person bio for talk announcements and introductions.</span>
    <button type="button" id="bio-copy">Copy</button>
  </div>
  <div class="bio-speaker-text" id="bio-speaker-text">
    <p>
      Jungpyo Lee is a Postdoctoral Scholar in Mechanical Engineering at the University of California, Berkeley, working with Prof. Hannah Stuart in the Embodied Dexterity Group. Lee's research focuses on robotic grasping and manipulation, tactile sensing, and wearable assistive devices, with an emphasis on leveraging the intrinsic functionality of hardware to make grasping reliable in the real world. Representative work includes the Smart Suction Cup, a flow-based tactile gripper for haptic search, and the Dorsal Grasper, a supernumerary wearable device that restores grasping for people with cervical spinal cord injury. Lee received a Ph.D. in Mechanical Engineering from UC Berkeley in 2024 and B.S. and M.S. degrees in Mechanical Engineering from Yonsei University, and previously worked on brain–machine interfaces and ultrasonic neuromodulation at the Korea Institute of Science and Technology (KIST). Lee's work has been selected as an IEEE TNSRE Featured Article and highlighted in Science Robotics' Editor's Choice, and Lee serves as an Associate Editor for IEEE ICRA 2027.
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
