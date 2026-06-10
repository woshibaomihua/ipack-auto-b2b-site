# V46 Requested Vehicle Models Audit

## Result

The requested Toyota / Honda / Pick-Up / Suzuki model names have been added into both homepage model mapping and Products fitment model mapping.

## Important note

This update adds model search/filter coverage. It does not mean every model now has a unique real product photo/OE database record. Some demo vehicle entries reuse existing generic vehicle images until real fitment photos/OE data are provided.

## Audit JSON

```json
{
  "all_requested_models_present": true,
  "after": {
    "Toyota": {
      "Prius": true,
      "Prime": true,
      "Lexus": true,
      "Corolla": true,
      "Axio": true,
      "Fielder": true,
      "Camry": true,
      "RAV4": true,
      "Hiace": true,
      "Highlander": true,
      "Tacoma": true,
      "Vitz": true,
      "Yaris": true,
      "Noah": true,
      "Voxy": true,
      "Allion": true,
      "Premio": true,
      "Probox": true,
      "Succeed": true,
      "IST": true,
      "Scion XA": true,
      "Urban Cruiser": true,
      "Ractis": true
    },
    "Honda": {
      "Fit": true,
      "Jazz": true,
      "Vezel": true,
      "HR-V": true,
      "CR-V": true,
      "Civic": true,
      "XR-V": true,
      "City": true,
      "Grace": true
    },
    "Pick-Up": {
      "Hilux Vigo": true,
      "Tacoma": true,
      "Isuzu D-MAX": true,
      "Ford Ranger": true,
      "4x4 Pick up": true
    },
    "Suzuki": {
      "Swift": true,
      "Dzire": true,
      "S-Presso": true,
      "Ciaz": true
    }
  },
  "node_checks": {
    "assets/js/main.js": [
      0,
      ""
    ],
    "assets/fitment-v26/fitment-v26.js": [
      0,
      ""
    ]
  },
  "added_demo_vehicle_ids": [
    "toyota-prius-prime",
    "toyota-vitz-yaris",
    "toyota-noah-voxy",
    "toyota-hilux-vigo",
    "isuzu-dmax",
    "suzuki-swift"
  ]
}
```
