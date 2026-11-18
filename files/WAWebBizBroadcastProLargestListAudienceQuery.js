__d(
  "WAWebBizBroadcastProLargestListAudienceQuery",
  [
    "WAWebBizBroadcastProAudienceIdentityQuery",
    "WAWebSchemaLabelAssociation",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .all(),
            n = u(t),
            r = t.flatMap(function (e) {
              var t = e.associationId,
                r = e.labelId,
                a = e.type;
              if (
                r !== n ||
                a !== o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
              )
                return [];
              var i = c(t);
              return i == null ? [] : [i];
            }),
            a = yield o(
              "WAWebBizBroadcastProAudienceIdentityQuery",
            ).resolveProAudienceLids(r),
            i = new Set(a.values());
          return Array.from(new Set(e)).filter(function (e) {
            return i.has(e);
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.associationId,
          a = n.labelId,
          i = n.type;
        if (
          i === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid &&
          c(r) != null
        ) {
          var l;
          t.set(a, ((l = t.get(a)) != null ? l : 0) + 1);
        }
      }
      var s = null,
        u = 0;
      for (var d of t) {
        var m = d[0],
          p = d[1];
        p > u && ((s = m), (u = p));
      }
      return s;
    }
    function c(e) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e);
      } catch (e) {
        return null;
      }
    }
    l.queryProLargestListAudience = e;
  },
  98,
);
