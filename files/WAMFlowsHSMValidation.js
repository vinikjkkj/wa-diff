__d(
  "WAMFlowsHSMValidation",
  [
    "WAFlowsDynamicDataUtils",
    "WAMFlowsHSMEditorUtils",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (e != null ? e : "").length > t.max;
    }
    function s(t, n) {
      return (
        t.length > n.maxOptions ||
        t.some(function (t) {
          return (
            !r("isStringNotNullAndNotWhitespaceOnly")(t) ||
            e(t, { max: n.maxOptionLabel }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t)
          );
        })
      );
    }
    function u(e, t) {
      return !(
        e.length > t.SCREEN.maxNumberOfScreens ||
        !e.every(function (e) {
          return c(e, t);
        })
      );
    }
    function c(t, n) {
      var a =
        t.components.filter(function (e) {
          return e.flowJSON.type === "Image";
        }).length > n.Image.maxImagesPerScreen;
      if (
        t.components.length === 0 ||
        !r("isStringNotNullAndNotWhitespaceOnly")(t.title) ||
        !r("isStringNotNullAndNotWhitespaceOnly")(t.buttonTitle) ||
        o("WAFlowsDynamicDataUtils").isBindingValue(t.buttonTitle) ||
        e(t.buttonTitle, { max: n.BUTTON.maxCTALabel }) ||
        t.components.length > n.COMPONENT.maxNumberOfComponents ||
        a
      )
        return !1;
      var i = t.components.every(function (e) {
        return d(e.flowJSON, n);
      });
      return !!i;
    }
    function d(t, n) {
      var a, i, l;
      switch (t.type) {
        case "TextHeading":
        case "TextSubheading":
        case "TextBody":
        case "TextCaption": {
          var u = Array.isArray(t.text) ? t.text.join("\n") : String(t.text);
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(u) ||
            e(u, { max: n[t.type].maxText }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.text)
          )
            return !1;
          break;
        }
        case "TextInput":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(t.label) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            e(t["helper-text"], { max: n[t.type].maxHelperText }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t["helper-text"])
          )
            return !1;
          break;
        case "DatePicker":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(t.label) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            e(t["helper-text"], { max: n[t.type].maxHelperText }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t["helper-text"])
          )
            return !1;
          break;
        case "TextArea":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(t.label) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            e(t["helper-text"], { max: n[t.type].maxHelperText }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t["helper-text"])
          )
            return !1;
          break;
        case "CheckboxGroup":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(
              (a = t.label) != null ? a : "",
            ) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            s(
              t["data-source"].map(function (e) {
                var t = e.title;
                return t;
              }),
              {
                maxOptionLabel: n[t.type].maxOptionLabel,
                maxOptions: n[t.type].maxOptions,
              },
            )
          )
            return !1;
          break;
        case "RadioButtonsGroup":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(
              (i = t.label) != null ? i : "",
            ) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            s(
              t["data-source"].map(function (e) {
                var t = e.title;
                return t;
              }),
              {
                maxOptionLabel: n[t.type].maxOptionLabel,
                maxOptions: n[t.type].maxOptions,
              },
            )
          )
            return !1;
          break;
        case "Dropdown":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(
              (l = t.label) != null ? l : "",
            ) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label) ||
            s(
              t["data-source"].map(function (e) {
                var t = e.title;
                return t;
              }),
              {
                maxOptionLabel: n[t.type].maxOptionLabel,
                maxOptions: n[t.type].maxOptions,
              },
            )
          )
            return !1;
          break;
        case "Image":
          return t.src !== o("WAMFlowsHSMEditorUtils").getBlankBase64Image();
        case "OptIn":
          if (
            !r("isStringNotNullAndNotWhitespaceOnly")(t.label) ||
            e(t.label, { max: n[t.type].maxLabel }) ||
            o("WAFlowsDynamicDataUtils").isBindingValue(t.label)
          )
            return !1;
          break;
        default:
          return !0;
      }
      return !0;
    }
    ((l.validateScreens = u), (l.validateComponent = d));
  },
  98,
);
