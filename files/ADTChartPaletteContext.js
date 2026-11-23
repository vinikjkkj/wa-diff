__d(
  "ADTChartPaletteContext",
  ["GeoChartPalette", "emptyFunction", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        categorical_color: {
          cloud: {
            contrasting: "rgba(247,244,240,1)",
            default: "rgba(247,244,240,1)",
          },
          dark_cloud: {
            contrasting: "rgba(230,226,223,1)",
            default: "rgba(230,226,223,1)",
          },
          eggplant: {
            contrasting: "rgba(62,31,155,1)",
            default: "rgba(92,59,191,1)",
          },
          periwinkle: {
            contrasting: "rgba(77,125,221,1)",
            default: "rgba(128,170,255,1)",
          },
          pine: {
            contrasting: "rgba(16,89,59,1)",
            default: "rgba(48,131,96,1)",
          },
          plum: {
            contrasting: "rgba(120,49,170,1)",
            default: "rgba(158,67,223,1)",
          },
          redwood: {
            contrasting: "rgba(177,67,45,1)",
            default: "rgba(212,92,67,1)",
          },
          rose: {
            contrasting: "rgba(120,41,93,1)",
            default: "rgba(172,47,130,1)",
          },
          sea: {
            contrasting: "rgba(6,160,160,1)",
            default: "rgba(50,205,205,1)",
          },
          sky: {
            contrasting: "rgba(61,181,241,1)",
            default: "rgba(140,217,255,1)",
          },
          slate: {
            contrasting: "rgba(20,13,13,1)",
            default: "rgba(72,68,68,1)",
          },
          walnut: {
            contrasting: "rgba(82,49,26,1)",
            default: "rgba(122,86,60,1)",
          },
        },
        fill: { chart: "rgba(255,255,255,1)", highlight: "rgba(0,0,0,0.05)" },
        font: {
          family: "Roboto, Arial, sans-serif",
          size: {
            label: { font_size: 12, line_height: 1.33334 },
            value: { font_size: 14, line_height: 1.42858 },
          },
        },
        palette: {
          complementary1: {
            deemphasized: {
              multiple: [
                "rgba(158,67,223,0.3)",
                "rgba(172,47,130,0.3)",
                "rgba(128,170,255,0.3)",
                "rgba(122,86,60,0.3)",
              ],
              single: "rgba(140,217,255,0.3)",
            },
            default: {
              multiple: [
                "rgba(158,67,223,1)",
                "rgba(172,47,130,1)",
                "rgba(128,170,255,1)",
                "rgba(122,86,60,1)",
              ],
              single: "rgba(140,217,255,1)",
            },
          },
          complementary2: {
            deemphasized: {
              multiple: [
                "rgba(212,92,67,0.3)",
                "rgba(158,67,223,0.3)",
                "rgba(140,217,255,0.3)",
                "rgba(50,205,205,0.3)",
              ],
              single: "rgba(50,205,205,0.3)",
            },
            default: {
              multiple: [
                "rgba(212,92,67,1)",
                "rgba(158,67,223,1)",
                "rgba(140,217,255,1)",
                "rgba(50,205,205,1)",
              ],
              single: "rgba(50,205,205,1)",
            },
          },
          leading1: {
            deemphasized: {
              multiple: [
                "rgba(50,205,205,0.3)",
                "rgba(158,67,223,0.3)",
                "rgba(128,170,255,0.3)",
                "rgba(212,92,67,0.3)",
                "rgba(72,68,68,0.3)",
              ],
              single: "rgba(50,205,205,0.3)",
            },
            default: {
              multiple: [
                "rgba(50,205,205,1)",
                "rgba(158,67,223,1)",
                "rgba(128,170,255,1)",
                "rgba(212,92,67,1)",
                "rgba(72,68,68,1)",
              ],
              single: "rgba(50,205,205,1)",
            },
          },
          leading2: {
            deemphasized: {
              multiple: [
                "rgba(140,217,255,0.3)",
                "rgba(50,205,205,0.3)",
                "rgba(172,47,130,0.3)",
                "rgba(72,68,68,0.3)",
              ],
              single: "rgba(140,217,255,0.3)",
            },
            default: {
              multiple: [
                "rgba(140,217,255,1)",
                "rgba(50,205,205,1)",
                "rgba(172,47,130,1)",
                "rgba(72,68,68,1)",
              ],
              single: "rgba(140,217,255,1)",
            },
          },
          leading3: {
            deemphasized: {
              multiple: [
                "rgba(128,170,255,0.3)",
                "rgba(158,67,223,0.3)",
                "rgba(212,92,67,0.3)",
                "rgba(50,205,205,0.3)",
              ],
              single: "rgba(128,170,255,0.3)",
            },
            default: {
              multiple: [
                "rgba(128,170,255,1)",
                "rgba(158,67,223,1)",
                "rgba(212,92,67,1)",
                "rgba(50,205,205,1)",
              ],
              single: "rgba(128,170,255,1)",
            },
          },
          neutral: {
            deemphasized: {
              multiple: [
                "rgba(247,244,240,0.3)",
                "rgba(247,244,240,0.3)",
                "rgba(247,244,240,0.3)",
                "rgba(247,244,240,0.3)",
              ],
              single: "rgba(247,244,240,0.3)",
            },
            default: {
              multiple: [
                "rgba(247,244,240,1)",
                "rgba(247,244,240,1)",
                "rgba(247,244,240,1)",
                "rgba(247,244,240,1)",
              ],
              single: "rgba(247,244,240,1)",
            },
          },
        },
        radius: { dense: 1, normal: 2, scarce: 4, sparse: 3 },
        stroke: {
          axis: "rgba(0,0,0,0.35)",
          guide: "rgba(0,0,0,0.55)",
          tick: "rgba(0,0,0,0.15)",
        },
        stroke_width: { dense: 1, normal: 2, scarce: 4, sparse: 3 },
        text_color: { label: "rgba(0,0,0,0.55)", value: "rgba(0,0,0,0.75)" },
      };
    function c(e) {
      var t = e.isDeemphasized,
        n = t === void 0 ? !1 : t,
        r = e.type;
      return u.palette[r][n ? "deemphasized" : "default"];
    }
    var d = s.createContext({
      getColor: r("emptyFunction").thatReturns(
        c({ type: r("GeoChartPalette").Neutral }).single,
      ),
      default: !0,
    });
    l.default = d;
  },
  98,
);
