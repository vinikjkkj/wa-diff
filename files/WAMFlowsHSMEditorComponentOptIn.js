__d(
  "WAMFlowsHSMEditorComponentOptIn",
  [
    "fbt",
    "CometPlaceholder.react",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoGlimmer.react",
    "GeoHStack.react",
    "GeoVStack.react",
    "WAMFlowsFlowProvider.react",
    "WAMFlowsHSMEditorInputField.react",
    "WAMFlowsHSMEditorInputLabel.react",
    "WAMFlowsHSMEditorProvider",
    "WAMFlowsHSMEditorRemoveButton.react",
    "WAMFlowsHSMEditorRequiredInput.react",
    "WAMFlowsHSMFbt",
    "WAMFlowsHSMValidationConfig",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "");
    function d(e) {
      var t;
      return (t = e["on-click-action"]) == null || (t = t.next) == null
        ? void 0
        : t.name;
    }
    function m(e) {
      var t = e.component,
        n = e.onComponentChange,
        a = e.onComponentRemove,
        l = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        s = l.removeScreen,
        c = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG
          .OptIn,
        m = function () {
          var e = d(t);
          (e != null && s(e), a == null || a());
        };
      return u.jsxs(r("GeoVStack.react"), {
        children: [
          u.jsx(r("WAMFlowsHSMEditorInputField.react"), {
            isLabelHidden: !0,
            isRequired: !0,
            isTextArea: !0,
            label: o("WAMFlowsHSMFbt").LABEL_FIELD_LABEL,
            maxLength: c.maxLabel,
            onChange: function (r) {
              n(babelHelpers.extends({}, t, { label: r }));
            },
            value: t.label,
          }),
          u.jsx(r("CometPlaceholder.react"), {
            fallback: u.jsxs(u.Fragment, {
              children: [
                u.jsx(r("GeoGlimmer.react"), {
                  height: 20,
                  width: 170,
                  loggingName: i.id,
                }),
                u.jsx(r("GeoGlimmer.react"), {
                  height: 36,
                  width: 194,
                  loggingName: i.id,
                }),
              ],
            }),
            name: i.id,
            children: u.jsx(p, { component: t, onComponentChange: n }),
          }),
          u.jsxs(r("GeoHStack.react"), {
            alignItems: "center",
            justifyContent: "end",
            children: [
              u.jsx(r("WAMFlowsHSMEditorRequiredInput.react"), {
                onChange: function () {
                  n(babelHelpers.extends({}, t, { required: !t.required }));
                },
                value: !!t.required,
              }),
              u.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: m }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = e.component,
        a = e.onComponentChange,
        i = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        l = i.addOptinScreen,
        d = i.removeScreen,
        m = i.setSelectedScreenId,
        p = o("WAMFlowsFlowProvider.react").useWAMFlow(),
        _ = p.setIsFlowVisible,
        f = function () {
          var e = l(c.toString());
          (a(
            babelHelpers.extends({}, n, {
              "on-click-action": {
                name: "navigate",
                next: { name: e, type: "screen" },
                payload: {},
              },
            }),
          ),
            _(!0));
        },
        g = function () {
          var e,
            t =
              (e = n["on-click-action"]) == null || (e = e.next) == null
                ? void 0
                : e.name;
          (_(!0), t != null && m(t));
        },
        h = function () {
          var e,
            t =
              (e = n["on-click-action"]) == null || (e = e.next) == null
                ? void 0
                : e.name;
          (_(!0),
            t != null &&
              (d(t),
              a(babelHelpers.extends({}, n, { "on-click-action": void 0 }))));
        },
        y = ((t = n["on-click-action"]) == null ? void 0 : t.next) != null;
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("GeoFlexbox.react"), {
            children: u.jsx(r("WAMFlowsHSMEditorInputLabel.react"), {
              isLabelHidden: !1,
              isRequired: !1,
              label: s._(/*BTDS*/ ""),
            }),
          }),
          y
            ? u.jsxs(r("GeoHStack.react"), {
                children: [
                  u.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    label: s._(/*BTDS*/ ""),
                    onClick: g,
                  }),
                  u.jsx(r("GeoButton.react"), {
                    "data-testid": void 0,
                    label: s._(/*BTDS*/ ""),
                    onClick: h,
                  }),
                ],
              })
            : u.jsx(r("GeoButton.react"), {
                "data-testid": void 0,
                label: s._(/*BTDS*/ ""),
                onClick: f,
              }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
