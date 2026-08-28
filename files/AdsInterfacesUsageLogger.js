__d(
  "AdsInterfacesUsageLogger",
  [
    "AdDraftFragmentSource",
    "AdsALChannel",
    "AdsInterfacesFieldUsageLogger",
    "ExecutionEnvironment",
    "QPLSharing",
    "cr:3952",
    "ifRequired",
    "isTruthy",
    "objectKeys",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t) {
        return Object.prototype.toString.apply(t) === "[object Object]";
      },
      c = function (t) {
        return t.some(u);
      },
      d = function (t, n, r, o) {
        for (var e = n.split("."), a = t; e.length > 1; ) {
          var i = e[0];
          (e.shift(),
            i[0] === ":"
              ? ((i = i.substr(1)), i in a || (a[i] = []))
              : i in a || (a[i] = {}),
            (a = a[i]));
        }
        var l = e[0];
        return (
          l[0] === ":" && (l = l.substr(1)),
          (a[l] = { newValue: r, oldValue: o }),
          t
        );
      },
      m = function (t, n) {
        if ((n === void 0 && (n = ""), t == null || !u(t))) return [];
        var e = [];
        return (
          r("objectKeys")(t).forEach(function (o) {
            var a = r("isTruthy")(n) ? n + "." + o : o,
              i = t[o],
              l = o === "newValue";
            if (l) e.push(n);
            else if (u(i)) {
              var s;
              (s = e).push.apply(s, m(i, a));
            }
            if (Array.isArray(i))
              if (c(i)) {
                var d = babelHelpers.construct(
                  Set,
                  i.map(function (e) {
                    return m(e, (l ? n : a) + "[]");
                  }),
                );
                e = e.concat(Array.from(d));
              } else l || e.push(a);
          }),
          e
        );
      },
      p = function (t, n, o, a) {
        (o === void 0 && (o = ""), a === void 0 && (a = {}));
        var e = r("isTruthy")(o);
        return (
          Array.isArray(t) && Array.isArray(n)
            ? n.forEach(function (r, i) {
                var l = e ? o + "." + i : "." + i;
                p(t[i], n[i], l, a);
              })
            : t != null && n != null && u(t) && u(n)
              ? (r("objectKeys")(n).forEach(function (r) {
                  var i = Array.isArray(n[r]) ? ":" : "",
                    l = e ? o + "." + i + r : "" + i + r;
                  p(t[r], n[r], l, a);
                }),
                r("objectKeys")(t)
                  .filter(function (e) {
                    return !(e in n);
                  })
                  .forEach(function (r) {
                    var i = Array.isArray(n[r]) ? ":" : "",
                      l = e ? o + "." + i + r : "" + i + r;
                    p(t[r], n[r], l, a);
                  }))
              : t !== n && o !== "" && d(a, o, n, t),
          a
        );
      },
      _ = r("ifRequired")(
        "hyperionAutoLogging",
        function (e) {
          return function () {
            return e.ALEventIndex.getNextEventIndex();
          };
        },
        function () {
          return function () {
            return -1;
          };
        },
      );
    function f(e) {
      if (!e.hasValue()) return null;
      var t = e.getValue();
      if (t == null) return null;
      var n = t.values.toJS();
      return (
        r("objectKeys")(n).forEach(function (e) {
          n[e] = n[e].newValue;
        }),
        n
      );
    }
    function g(e) {
      var t;
      if (!e.hasValue()) return null;
      var n = e.getValue();
      return n == null
        ? null
        : {
            action: n.action,
            ad_object_type: n.objectType,
            draft_id: n.draftID,
            fragment_id: n.fragmentID,
            source:
              (t = n.source) != null ? t : r("AdDraftFragmentSource").NONE,
          };
    }
    var h = function (a) {
        var t = n("cr:3952") == null ? void 0 : n("cr:3952").top();
        o("AdsALChannel").AdsALChannel.emit(
          "al_ad_fragment_spec_creation_event",
          {
            callFlowlet: t,
            event: "ad_fragment_spec_creation",
            eventIndex: _(),
            eventTimestamp: (e || (e = r("performanceAbsoluteNow")))(),
            triggerFlowlet: t == null ? void 0 : t.data.triggerFlowlet,
            fragments: a,
            metadata: {},
          },
        );
      },
      y = function (a) {
        var t = n("cr:3952") == null ? void 0 : n("cr:3952").top();
        o("AdsALChannel").AdsALChannel.emit(
          "al_ad_fragment_spec_publish_event",
          {
            callFlowlet: t,
            event: "ad_fragment_spec_publish",
            eventIndex: _(),
            eventTimestamp: (e || (e = r("performanceAbsoluteNow")))(),
            triggerFlowlet: t == null ? void 0 : t.data.triggerFlowlet,
            fragments: a,
            metadata: {},
          },
        );
      },
      C = function (a) {
        var t = n("cr:3952") == null ? void 0 : n("cr:3952").top();
        o("AdsALChannel").AdsALChannel.emit(
          "al_ad_object_spec_validation_event",
          {
            callFlowlet: t,
            event: "ad_object_spec_validation",
            eventIndex: _(),
            eventTimestamp: (e || (e = r("performanceAbsoluteNow")))(),
            triggerFlowlet: t == null ? void 0 : t.data.triggerFlowlet,
            fragments: a,
            metadata: {},
          },
        );
      },
      b = function (a, i, l, u) {
        var t = a != null ? a.map(f).toJS() : {},
          c = i.map(f).toJS(),
          d = p(t, c, "", {}),
          h = Object.keys(d);
        if (h.length !== 0) {
          var y = m(Object.values(d)[0]),
            C = l.type;
          r("AdsInterfacesFieldUsageLogger").logForAnalytics("USAGE", C, {
            level: u,
            action: l,
            specDiff: d,
            fields: y,
            source: "PE",
            ad_object_ids: h,
          });
          var b = new Set(h),
            v = i
              .filter(function (e, t) {
                return b.has(t);
              })
              .map(g)
              .toJS(),
            S = n("cr:3952") == null ? void 0 : n("cr:3952").top(),
            R;
          if ((s || (s = r("ExecutionEnvironment"))).canUseDOM) {
            var L;
            R = (L = window.event) == null ? void 0 : L.type;
          }
          (o("AdsALChannel").AdsALChannel.emit(
            "al_ad_object_spec_change_event",
            {
              actionType: C,
              browserEventType: R,
              callFlowlet: S,
              changedIDs: v,
              dispatchModuleID: l._dispatchModuleID,
              event: "ad_object_spec_change",
              eventIndex: _(),
              eventTimestamp: (e || (e = r("performanceAbsoluteNow")))(),
              specDiff: d,
              triggerFlowlet: S == null ? void 0 : S.data.triggerFlowlet,
              metadata: {},
            },
          ),
            r("QPLSharing").emitPoint(
              "VALIDATE_CHANGES",
              "FRAGMENT_SPEC_DIFFED",
              {
                data: {
                  string: {
                    action: l.type,
                    actionCallsite: String(l._dispatchModuleID),
                    level: u,
                  },
                  string_array: { fields: y, adObjectIDs: h },
                },
              },
            ));
        }
      };
    ((l.extractFields = m),
      (l.calcDiff = p),
      (l.logPESpecCreationAction = h),
      (l.logPESpecPublishAction = y),
      (l.logPESpecValidationAction = C),
      (l.logPESpecChangeAction = b));
  },
  98,
);
