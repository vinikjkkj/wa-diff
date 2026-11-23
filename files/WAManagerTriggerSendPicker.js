__d(
  "WAManagerTriggerSendPicker",
  [
    "fbt",
    "GeoSelector.react",
    "GeoSelectorItem.react",
    "MAIBAChatNavigationContext",
    "MAIBAMessageContext",
    "react",
    "useJSON",
    "useMAIBASendMessageFromInsideChat",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e, t) {
      return e
        .replace(/\{label\}/g, t.label)
        .replace(/\{value\}/g, t.value)
        .replace(/\{field_title\}/g, t.field_title)
        .replace(/\{field_id\}/g, t.field_id);
    }
    function m(e) {
      var t,
        n,
        a,
        i = e.attributesJson,
        l = r("useJSON")(i),
        m = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        p = m.externalConversationId,
        _ = o("MAIBAMessageContext").useMAIBAMessageContext(),
        f = _.rowIndexFromBottom,
        g = r("useMAIBASendMessageFromInsideChat")(),
        h = c(!1),
        y = h[0],
        C = h[1],
        b = c(null),
        v = b[0],
        S = b[1],
        R = r("useJSON")((t = l.choices_json) != null ? t : "[]"),
        L = (n = l.field_id) != null ? n : "",
        E = (a = l.field_title) != null ? a : "",
        k =
          l.postback_template != null && l.postback_template !== ""
            ? l.postback_template
            : "Use {label} for {field_title}";
      if (
        R == null ||
        !Array.isArray(R) ||
        R.length === 0 ||
        L === "" ||
        p == null
      )
        return null;
      var I = y || f !== 0,
        T = function (t) {
          if (!I) {
            S(t);
            var e = R.find(function (e) {
              return e.value === t;
            });
            if (e != null) {
              var n = d(k, {
                field_id: L,
                field_title: E,
                label: e.label,
                value: e.value,
              });
              (C(!0),
                g({
                  displayMessage: s
                    ._(/*BTDS*/ "", [
                      s._param("selected choice", e.label),
                      s._param("field name", E),
                    ])
                    .toString(),
                  externalConversationId: p,
                  isSentFromOutOfChat: !1,
                  message: n,
                  originComponent: "WAManagerTriggerSendPicker",
                }));
            }
          }
        },
        D =
          l.placeholder != null && l.placeholder !== ""
            ? l.placeholder
            : "Select " + E;
      return u.jsx(r("GeoSelector.react"), {
        isDisabled: I,
        label: E,
        onChange: T,
        placeholder: D,
        value: v,
        children: R.map(function (e) {
          return u.jsx(
            r("GeoSelectorItem.react"),
            { label: e.label, value: e.value },
            e.value,
          );
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
