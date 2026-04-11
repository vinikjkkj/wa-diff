__d(
  "WDSButtonFontColorConfig",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = "contentDefault";
      switch (e) {
        case "filled": {
          switch (t) {
            case "default": {
              r = n ? "contentDisabled" : "contentOnAccent";
              break;
            }
            case "destructive": {
              r = n ? "contentDisabled" : "contentOnAccent";
              break;
            }
            case "media": {
              r = "persistentAlwaysBlack";
              break;
            }
          }
          break;
        }
        case "tonal": {
          switch (t) {
            case "default": {
              r = "accentEmphasized";
              break;
            }
            case "destructive": {
              r = "secondaryNegativeEmphasized";
              break;
            }
            case "media": {
              r = "persistentAlwaysWhite";
              break;
            }
          }
          break;
        }
        case "outline": {
          switch (t) {
            case "default": {
              r = "contentActionEmphasized";
              break;
            }
            case "destructive": {
              r = "secondaryNegativeEmphasized";
              break;
            }
            case "media": {
              r = "persistentAlwaysWhite";
              break;
            }
          }
          break;
        }
        case "borderless": {
          switch (t) {
            case "default": {
              r = "contentActionEmphasized";
              break;
            }
            case "destructive": {
              r = "secondaryNegativeEmphasized";
              break;
            }
            case "media": {
              r = "persistentAlwaysWhite";
              break;
            }
          }
          break;
        }
      }
      return r;
    }
    i.getButtonFontColorStyles = e;
  },
  66,
);
