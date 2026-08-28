__d(
  "WAManagerTriggerSendPicker",
  [
    "GeoSelector.react",
    "GeoSelectorItem.react",
    "MAIBAChatNavigationContext",
    "MAIBAMessageContext",
    "react",
    "react-compiler-runtime",
    "useJSON",
    "useMAIBASendMessageFromInsideChat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e, t) {
      return e
        .replace(/\{label\}/g, t.label)
        .replace(/\{value\}/g, t.value)
        .replace(/\{field_title\}/g, t.field_title)
        .replace(/\{field_id\}/g, t.field_id);
    }
    function d(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(17),
        l = e.attributesJson,
        d = r("useJSON")(l),
        p = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        _ = p.externalConversationId,
        f = o("MAIBAMessageContext").useMAIBAMessageContext(),
        g = f.rowIndexFromBottom,
        h = r("useMAIBASendMessageFromInsideChat")(),
        y = u(!1),
        C = y[0],
        b = y[1],
        v = u(null),
        S = v[0],
        R = v[1],
        L = r("useJSON")((t = d.choices_json) != null ? t : "[]"),
        E = (n = d.field_id) != null ? n : "",
        k = (a = d.field_title) != null ? a : "",
        I =
          d.postback_template != null && d.postback_template !== ""
            ? d.postback_template
            : "Use {label} for {field_title}";
      if (
        L == null ||
        !Array.isArray(L) ||
        L.length === 0 ||
        E === "" ||
        _ == null
      )
        return null;
      var T = C || g !== 0,
        D;
      i[0] !== L ||
      i[1] !== _ ||
      i[2] !== E ||
      i[3] !== k ||
      i[4] !== T ||
      i[5] !== I ||
      i[6] !== h
        ? ((D = function (t) {
            if (!T) {
              R(t);
              var e = L.find(function (e) {
                return e.value === t;
              });
              if (e != null) {
                var n = c(I, {
                  field_id: E,
                  field_title: k,
                  label: e.label,
                  value: e.value,
                });
                (b(!0),
                  h({
                    externalConversationId: _,
                    isSentFromOutOfChat: !1,
                    message: n,
                    originComponent: "WAManagerTriggerSendPicker",
                  }));
              }
            }
          }),
          (i[0] = L),
          (i[1] = _),
          (i[2] = E),
          (i[3] = k),
          (i[4] = T),
          (i[5] = I),
          (i[6] = h),
          (i[7] = D))
        : (D = i[7]);
      var x = D,
        $ =
          d.placeholder != null && d.placeholder !== ""
            ? d.placeholder
            : "Select " + k,
        P;
      i[8] !== L ? ((P = L.map(m)), (i[8] = L), (i[9] = P)) : (P = i[9]);
      var N;
      return (
        i[10] !== k ||
        i[11] !== x ||
        i[12] !== T ||
        i[13] !== $ ||
        i[14] !== S ||
        i[15] !== P
          ? ((N = s.jsx(r("GeoSelector.react"), {
              isDisabled: T,
              label: k,
              onChange: x,
              placeholder: $,
              value: S,
              children: P,
            })),
            (i[10] = k),
            (i[11] = x),
            (i[12] = T),
            (i[13] = $),
            (i[14] = S),
            (i[15] = P),
            (i[16] = N))
          : (N = i[16]),
        N
      );
    }
    function m(e) {
      return s.jsx(
        r("GeoSelectorItem.react"),
        { label: e.label, value: e.value },
        e.value,
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
