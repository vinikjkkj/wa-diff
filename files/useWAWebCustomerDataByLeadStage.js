__d(
  "useWAWebCustomerDataByLeadStage",
  [
    "WAWebCustomerDataCollection",
    "WAWebLeadStage",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m() {
      var e = new Map();
      for (var t of o("WAWebLeadStage").LEAD_STAGE_ORDER) e.set(t, []);
      for (var n of o(
        "WAWebCustomerDataCollection",
      ).CustomerDataCollection.getCustomerModels()) {
        var r = o("WAWebLeadStage").getLeadStageFromNumber(n.leadStage);
        if (r != null && r !== o("WAWebLeadStage").LeadStage.NONE) {
          var a = e.get(r);
          a != null && a.push(n);
        }
      }
      for (var i of e) {
        var l = i[1];
        l.sort(function (e, t) {
          return t.modifiedAt - e.modifiedAt;
        });
      }
      return e;
    }
    function p() {
      var e = o("react-compiler-runtime").c(5),
        t = d(_),
        n = t[0],
        r = t[1],
        a,
        i;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = function () {
            var e = function () {
              r(m());
            };
            return (
              o("WAWebCustomerDataCollection").CustomerDataCollection.on(
                "add",
                e,
              ),
              o("WAWebCustomerDataCollection").CustomerDataCollection.on(
                "change",
                e,
              ),
              o("WAWebCustomerDataCollection").CustomerDataCollection.on(
                "remove",
                e,
              ),
              e(),
              function () {
                (o("WAWebCustomerDataCollection").CustomerDataCollection.off(
                  "add",
                  e,
                ),
                  o("WAWebCustomerDataCollection").CustomerDataCollection.off(
                    "change",
                    e,
                  ),
                  o("WAWebCustomerDataCollection").CustomerDataCollection.off(
                    "remove",
                    e,
                  ));
              }
            );
          }),
          (i = []),
          (e[0] = a),
          (e[1] = i))
        : ((a = e[0]), (i = e[1])),
        c(a, i));
      var l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t, n, o) {
            r(function (e) {
              var r = new Map(),
                a = null;
              for (var i of e) {
                var l = i[0],
                  s = i[1];
                if (l === n) {
                  var u = s.filter(function (e) {
                    return e.id === t ? ((a = e), !1) : !0;
                  });
                  r.set(l, u);
                } else r.set(l, s);
              }
              var c = a;
              if (c != null) {
                var d,
                  m = (d = r.get(o)) != null ? d : [];
                r.set(o, [c].concat(m));
              }
              return r;
            });
          }),
          (e[2] = l))
        : (l = e[2]);
      var s = l,
        u;
      return (
        e[3] !== n
          ? ((u = { groupedData: n, moveCustomer: s }), (e[3] = n), (e[4] = u))
          : (u = e[4]),
        u
      );
    }
    function _() {
      return m();
    }
    l.useWAWebCustomerDataByLeadStage = p;
  },
  98,
);
