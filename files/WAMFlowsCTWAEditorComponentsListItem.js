__d(
  "WAMFlowsCTWAEditorComponentsListItem",
  [
    "fbt",
    "GeoAccordionListItem.react",
    "GeoDraggableAccordionList.react",
    "GeoDraggableAccordionListItem.react",
    "GeoListItem.react",
    "GeoPill.react",
    "WAMFlowsCTWAEditorComponentRenderer.react",
    "WAMFlowsCTWAEditorValidationConfig",
    "WAMFlowsCTWAFormInputTypes",
    "WAMFlowsFlowProvider.react",
    "WAMFlowsHSMComponentLabels",
    "WAMFlowsHSMEditorProvider",
    "WAMFlowsHSMEditorUtils",
    "WAMFlowsHSMValidation",
    "geoWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useMemo,
      p = c.useState;
    function _(e) {
      var t,
        n =
          (t = e.presetType) != null
            ? t
            : o("WAMFlowsCTWAFormInputTypes").detectPresetType(
                typeof e.flowJSON.label == "string" ? e.flowJSON.label : null,
                e.flowJSON.name,
              );
      if (
        o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedLabel(n) &&
        n != null
      ) {
        var r;
        return (r = o("WAMFlowsHSMComponentLabels").CTWA_FORM_INPUT_TYPE_LABELS[
          n
        ]) != null
          ? r
          : o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e.flowJSON.type];
      }
      return o("WAMFlowsHSMComponentLabels").COMPONENT_LABELS[e.flowJSON.type];
    }
    function f(e) {
      var t = e.accordionsExpandedById,
        n = e.dynamicComponents,
        a = e.onAccordionStateChange,
        i = e.onDeleteContentLog,
        l = e.onUpdateContentLog,
        c = e.removeComponent,
        d = e.selectedScreenId,
        m = e.updateComponent,
        p = e.updateScreen,
        f = o("WAMFlowsHSMEditorUtils").useNumberOfImagesOnScreen(),
        g = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        h = g.validationConfig,
        y = o("WAMFlowsFlowProvider.react").useWAMFlow(),
        C = y.setIsFlowVisible;
      return u.jsx(r("GeoDraggableAccordionList.react"), {
        draggableAccordionListXStyle: r("geoWidth").fullWidth,
        itemIDs: n.map(function (e) {
          return e.id;
        }),
        onReorder: function (t, r, a) {
          var e = t
            .map(function (e) {
              return n.find(function (t) {
                return t.id === e;
              });
            })
            .filter(Boolean);
          (p(d, function (t) {
            var n = t.components.slice(
              0,
              o("WAMFlowsCTWAEditorValidationConfig")
                .WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT
                .numberOfFixedComponents,
            );
            return babelHelpers.extends({}, t, { components: [].concat(n, e) });
          }),
            C(!0));
        },
        children: n.map(function (e, n) {
          var d,
            p,
            g,
            y = e.id,
            C =
              (d = (p = e.flowJSON.label) != null ? p : e.flowJSON.text) != null
                ? d
                : "",
            b =
              n +
              o("WAMFlowsCTWAEditorValidationConfig")
                .WAM_FLOWS_CTWA_VALIDATION_CONFIG.COMPONENT
                .numberOfFixedComponents,
            v =
              (g = e.presetType) != null
                ? g
                : o("WAMFlowsCTWAFormInputTypes").detectPresetType(
                    typeof e.flowJSON.label == "string"
                      ? e.flowJSON.label
                      : null,
                    e.flowJSON.name,
                  ),
            S = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedLabel(v),
            R =
              !o("WAMFlowsHSMValidation").validateComponent(e.flowJSON, h) ||
              (e.flowJSON.type === "Image" && f > h.Image.maxImagesPerScreen);
          return u.jsx(
            r("GeoDraggableAccordionListItem.react"),
            {
              "data-testid": void 0,
              isInitiallyExpanded: t[y],
              item: u.jsx(r("GeoListItem.react"), {
                description: S
                  ? void 0
                  : Array.isArray(C)
                    ? C.join("\n")
                    : String(C),
                endContent:
                  R &&
                  u.jsx(r("GeoPill.react"), {
                    hasIcon: !0,
                    label: s._(/*BTDS*/ ""),
                    status: "error",
                    value: s._(/*BTDS*/ ""),
                  }),
                label: _(e),
                truncate: "description",
              }),
              itemID: y,
              onChange: function (t) {
                return a(b, t);
              },
              children: u.jsx(r("WAMFlowsCTWAEditorComponentRenderer.react"), {
                component: e,
                onComponentChange: function (t) {
                  (m(t, b), l(y));
                },
                onComponentRemove: function () {
                  (c(b), i(y));
                },
              }),
            },
            y,
          );
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n,
        a,
        i = e.component,
        l = e.headerTestID,
        c = e.id,
        f = e.index,
        g = e.isRemovable,
        h = g === void 0 ? !0 : g,
        y = e.isTypeChangeDisabled,
        C = y === void 0 ? !1 : y,
        b = e.onAccordionStateChange,
        v = e.onComponentChange,
        S = e.onComponentRemove,
        R = o("WAMFlowsHSMEditorUtils").useNumberOfImagesOnScreen(),
        L = o("WAMFlowsHSMEditorProvider").useWhatsAppFlowTemplatesEditor(),
        E = L.validationConfig,
        k = p(!1),
        I = k[0],
        T = k[1],
        D =
          (t = (n = i.flowJSON.label) != null ? n : i.flowJSON.text) != null
            ? t
            : "",
        x =
          (a = i.presetType) != null
            ? a
            : o("WAMFlowsCTWAFormInputTypes").detectPresetType(
                typeof i.flowJSON.label == "string" ? i.flowJSON.label : null,
                i.flowJSON.name,
              ),
        $ = o("WAMFlowsCTWAFormInputTypes").isPresetWithLockedLabel(x),
        P = d(
          function (e) {
            (T(e), b(e));
          },
          [b],
        ),
        N = m(
          function () {
            return (
              !o("WAMFlowsHSMValidation").validateComponent(i.flowJSON, E) ||
              (i.flowJSON.type === "Image" && R > E.Image.maxImagesPerScreen)
            );
          },
          [i.flowJSON, R, E],
        );
      return u.jsx(
        r("GeoAccordionListItem.react"),
        {
          isInitiallyExpanded: I,
          item: u.jsx(r("GeoListItem.react"), {
            "data-testid": void 0,
            description: $
              ? void 0
              : Array.isArray(D)
                ? D.join("\n")
                : String(D),
            endContent:
              N &&
              u.jsx(r("GeoPill.react"), {
                hasIcon: !0,
                label: s._(/*BTDS*/ ""),
                status: "error",
                value: s._(/*BTDS*/ ""),
              }),
            label: _(i),
            truncate: "description",
          }),
          onChange: P,
          children: u.jsx(r("WAMFlowsCTWAEditorComponentRenderer.react"), {
            component: i,
            isRemovable: h,
            isTypeChangeDisabled: C,
            onComponentChange: v,
            onComponentRemove: S
              ? function () {
                  return S(f);
                }
              : void 0,
          }),
        },
        c,
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.CTWADraggableAccordionList = f),
      (l.CTWAAccordionListItem = g));
  },
  226,
);
