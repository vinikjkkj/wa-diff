__d(
  "MAIBAAssetSelectionContext",
  [
    "MAIBAAssetSelectionAutoSelect.react",
    "react",
    "useMAIBAChatAssetSelectionContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useEffectEvent,
      m = u.useImperativeHandle,
      p = u.useMemo,
      _ = u.useRef,
      f = u.useState;
    function g(e, t, n) {
      var r = _(t),
        o = _(null);
      m(n, function () {
        return {
          onMessageSent: function (t) {
            o.current = t;
          },
        };
      });
      var a = d(e);
      c(
        function () {
          var e = t === r.current,
            n = r.current == null && t === o.current,
            i = e || n;
          (i || a(), (r.current = t));
        },
        [t],
      );
    }
    function h(e) {
      var t = e.children,
        n = e.externalConversationId,
        r = e.initialSelectedAssets,
        a = f(Array.from(r != null ? r : [])),
        i = a[0],
        l = a[1],
        u = f(n),
        c = u[0],
        d = u[1];
      n !== c && (d(n), l([]));
      var m = _(null),
        h = _(null);
      g(
        function () {
          var e;
          (e = m.current) == null || e.onConversationChange();
        },
        n,
        h,
      );
      var y = p(
        function () {
          var e = new Set(
              i.map(function (e) {
                return e.id;
              }),
            ),
            t = function (n) {
              var t;
              e.has(n.id) ||
                ((t = m.current) == null || t.onUpdateAssetSelection(),
                l(function (e) {
                  return [].concat(e, [n]);
                }));
            };
          return {
            isAssetIdSelected: function (n) {
              return e.has(n);
            },
            onClearSelectedAssets: function () {
              var e;
              ((e = m.current) == null || e.onUpdateAssetSelection(), l([]));
            },
            onDeselectAsset: function (t) {
              var e;
              ((e = m.current) == null || e.onUpdateAssetSelection(),
                l(function (e) {
                  return e.filter(function (e) {
                    return e.id !== t;
                  });
                }));
            },
            onMessageSent: function (t) {
              var e;
              (h == null || (e = h.current) == null || e.onMessageSent(t),
                l([]));
            },
            onSelectAsset: t,
            selectedAssets: i,
            setSelectedAssets: l,
          };
        },
        [i],
      );
      return s.jsxs(
        o("useMAIBAChatAssetSelectionContext").MAIBAAssetSelectionContext
          .Provider,
        {
          value: y,
          children: [
            t,
            s.jsx(
              o("MAIBAAssetSelectionAutoSelect.react")
                .MAIBAAssetSelectionAutoSelect,
              {
                externalConversationId: n,
                hasInitialSelectedAssets: r != null && r.length > 0,
                imperativeRef: m,
                selectedAssets: i,
                setSelectedAssets: l,
              },
            ),
          ],
        },
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.MAIBAAssetSelectionContextProvider = h));
  },
  98,
);
