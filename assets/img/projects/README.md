# Project images

Put photos and GIFs for each project page under the matching subfolder. Reference them in `_projects/<slug>.md` with:

```liquid
{% include figure.liquid path="assets/img/projects/smart-suction-cup/your-file.gif" class="img-fluid rounded z-depth-1" %}
```

| Folder | Project page |
|--------|----------------|
| `smart-suction-cup/` | Smart Suction Cup |
| `dorsal-grasper/` | Dorsal Grasper |
| `acoustic-tactile-sensing/` | Acoustic Tactile Sensing |
| `brain-machine-interface/` | Brain–Machine Interface |
| `ultrasound-neuromodulation/` | Ultrasound Neuromodulation |
| `3d-neuronal-culture/` | 3D Neuronal Culture on 3D Graphene |

Card thumbnails use frontmatter `img:` (often from `assets/img/publication_preview/` until you add a dedicated thumbnail here).
