__d(
  "WAMFlowsHSMEditorUtils",
  ["fbt", "WAMFlowsHSMEditorProvider", "formatJson", "uuidv4"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e.replaceAll(" ", "_").replace(/[^a-zA-Z0-9\_]/g, "");
    }
    function u() {
      for (var e = "", t = 0; t < 6; t++)
        e += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      return e;
    }
    function c() {
      return "screen_" + u();
    }
    function d(e) {
      return e.split("_").slice(0, -1).join("_");
    }
    function m(e) {
      return e + "_" + r("uuidv4")().substr(0, 6);
    }
    function p() {
      var e = m("TextInput");
      return [
        {
          flowJSON: {
            "input-type": "text",
            label: "Label",
            name: e,
            required: !0,
            type: "TextInput",
          },
          id: e,
        },
      ];
    }
    function _() {
      var e = m("TextInput");
      return [
        {
          flowJSON: { text: s._(/*BTDS*/ "").toString(), type: "TextBody" },
          id: e,
        },
      ];
    }
    function f() {
      return "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    }
    var g = function (t) {
      return r("formatJson")(JSON.parse(t), 2);
    };
    function h() {
      var e,
        t = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        n = t.selectedScreen;
      return (e =
        n == null
          ? void 0
          : n.components.filter(function (e) {
              return e.flowJSON.type === "Image";
            }).length) != null
        ? e
        : 0;
    }
    function y() {
      var e,
        t = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        n = t.selectedScreen;
      return (e =
        n == null
          ? void 0
          : n.components.filter(function (e) {
              return e.flowJSON.type === "OptIn";
            }).length) != null
        ? e
        : 0;
    }
    ((l.sanitise = e),
      (l.generateScreenId = c),
      (l.removeComponentId = d),
      (l.generateComponentId = m),
      (l.getDefaultComponents = p),
      (l.getDefaultComponentsForOptinScreen = _),
      (l.getBlankBase64Image = f),
      (l.formatFlowjForDisplay = g),
      (l.useNumberOfImagesOnScreen = h),
      (l.useNumberOfOptinsOnScreen = y));
  },
  226,
);
