# Dorsal Grasper 3D models

| File                       | Label on project page  |
| -------------------------- | ---------------------- |
| `DorsalGrasper1.glb`       | Dorsal Grasper 1.0     |
| `DorsalGrasper2.glb`       | Dorsal Grasper 2.0     |
| `DorsalGrasper3.glb`       | Dorsal Grasper 3.0     |
| `PassiveDorsalGrasper.glb` | Passive Dorsal Grasper |

Filenames are case-sensitive on Linux / GitHub Pages.

## Export tips

Export as **glTF 2.0 (.glb)**. Large files (e.g. &gt;10 MB) load slowly—consider decimation in Blender before publishing.

Before committing a new model, compress it (welds duplicate vertices and applies Draco; shape is unchanged):

```bash
npx @gltf-transform/cli optimize input.glb output.glb --compress draco --simplify false --texture-compress false --instance false
```

This needs Node 20+; model-viewer loads the Draco decoder automatically.
