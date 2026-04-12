__d(
  "useWAWebCustomerDataByLeadStage",
  ["WAWebCustomerDataCollection", "WAWebLeadStage", "react"],
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
      var e = d(function () {
          return m();
        }),
        t = e[0],
        n = e[1];
      c(function () {
        var e = function () {
          n(m());
        };
        return (
          o("WAWebCustomerDataCollection").CustomerDataCollection.on("add", e),
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
      }, []);
      var r = u(function (e, t, r) {
        n(function (n) {
          var o = new Map(),
            a = null;
          for (var i of n) {
            var l = i[0],
              s = i[1];
            if (l === t) {
              var u = s.filter(function (t) {
                return t.id === e ? ((a = t), !1) : !0;
              });
              o.set(l, u);
            } else o.set(l, s);
          }
          var c = a;
          if (c != null) {
            var d,
              m = (d = o.get(r)) != null ? d : [];
            o.set(r, [c].concat(m));
          }
          return o;
        });
      }, []);
      return { groupedData: t, moveCustomer: r };
    }
    l.useWAWebCustomerDataByLeadStage = p;
  },
  98,
);
