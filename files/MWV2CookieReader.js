__d(
  "MWV2CookieReader",
  ["FBLogger", "I64", "LSIntEnum", "MWChatStateV2Types", "MWPActor.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        cbj: (e || (e = o("LSIntEnum"))).ofNumber(23),
        cbu: e.ofNumber(24),
        cg: e.ofNumber(18),
        cgu: e.ofNumber(19),
        cphj: e.ofNumber(21),
        cphu: e.ofNumber(22),
        dp: e.ofNumber(150),
        dp2: e.ofNumber(154),
        dp2u: e.ofNumber(155),
        dpb: e.ofNumber(152),
        dpbu: e.ofNumber(153),
        dpu: e.ofNumber(151),
        g: e.ofNumber(2),
        sc: e.ofNumber(15),
        sg: e.ofNumber(16),
      };
    function c(t) {
      var n;
      if (t != null) {
        var r = t.split(".");
        if (r.length === 2) {
          var a = r[0],
            i = r[1];
          if (!(/^-?[1-9]\d*$/.test(i) === !1 || a == null)) {
            var l =
              (n = u[a]) != null ? n : (e || (e = o("LSIntEnum"))).ofNumber(1);
            return [(s || (s = o("I64"))).of_string(i), l];
          }
        }
      }
    }
    function d(e) {
      var t = e.map(function (e) {
          var t = e[0];
          return (s || (s = o("I64"))).to_string(t);
        }),
        n = new Set(t);
      return n.size !== e.length
        ? (r("FBLogger")("messenger_comet").mustfix(
            "Duplicate thread in cookie (t3)",
          ),
          e.filter(function (e, t, n) {
            var r = e[0];
            return !n.slice(t + 1).some(function (e) {
              var t = e[0];
              return (s || (s = o("I64"))).equal(t, r);
            });
          }))
        : e;
    }
    var m = new Map();
    function p(e, t) {
      var n;
      if (e == null || o("MWPActor.react").isAPPlus())
        return o("MWChatStateV2Types").emptyMWChatState;
      if (!m.has(e) || t != null) {
        var r = _(e, t);
        m.set(e, r);
      }
      return (n = m.get(e)) != null
        ? n
        : o("MWChatStateV2Types").emptyMWChatState;
    }
    function _(e, t) {
      if (e == null || !e.startsWith("C"))
        return o("MWChatStateV2Types").emptyMWChatState;
      var n;
      try {
        n = JSON.parse(e.slice(1));
      } catch (e) {
        (r("FBLogger")("messenger_comet").mustfix("Error parsing JSON string"),
          (n = null));
      }
      if (n === null) return o("MWChatStateV2Types").emptyMWChatState;
      var a = [],
        i = new Set();
      n.t3.forEach(function (e) {
        var t = e.i,
          n = c(t);
        if (n != null) {
          (a.push(n), e.o === 1 && i.add(n));
          return;
        }
      });
      var l = d(a),
        u = new Map(),
        m = { contents: 0 },
        p = null;
      l.forEach(function (e) {
        var n = e[0],
          r = e[1],
          a = i.has([n, r]);
        (t != null && (p = t()),
          u.set(m.contents, {
            clientForcedMinimizeWatermark: 0,
            closeWatermark: 0,
            isPreloaded: !0,
            minimizeWatermark: a ? 0 : 1,
            openFlyoutWatermark: 0,
            openWatermark: a ? 1 : 0,
            tabId: m.contents,
            tabRootEntryPointRef: p,
            tabType: {
              threadKeyDescriptor: {
                clientThreadKey: void 0,
                threadKey: n,
                threadType: r,
              },
              type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab,
            },
          }),
          (m.contents += 1));
      });
      var _ = n.lm3;
      if (_ != null) {
        var f = c(_);
        if (f != null) {
          var g = f[0],
            h = f[1];
          (l.some(function (e) {
            var t = e[0];
            return (s || (s = o("I64"))).equal(t, g);
          }) ||
            (t != null && (p = t()),
            u.set(m.contents, {
              clientForcedMinimizeWatermark: 0,
              closeWatermark: 0,
              minimizeWatermark: 0,
              openFlyoutWatermark: 0,
              openWatermark: 2,
              tabId: m.contents,
              tabRootEntryPointRef: p,
              tabType: {
                threadKeyDescriptor: {
                  clientThreadKey: void 0,
                  threadKey: g,
                  threadType: h,
                },
                type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab,
              },
            })),
            (m.contents += 1));
        }
      }
      return {
        focusedTabId: void 0,
        mediaViewerOpenWatermark: -1,
        nextTabId: m.contents,
        tabs: u,
      };
    }
    l.read = p;
  },
  98,
);
