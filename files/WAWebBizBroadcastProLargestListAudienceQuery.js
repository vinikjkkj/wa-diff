__d(
  "WAWebBizBroadcastProLargestListAudienceQuery",
  [
    "WAWebBizBroadcastProAudienceIdentityQuery",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebSchemaLabelAssociation")
          .getLabelAssociationTable()
          .all(),
        n = s(t),
        r =
          n == null ? null : await o("WAWebSchemaLabel").getLabelTable().get(n),
        a = t.flatMap(function (e) {
          var t = e.associationId,
            r = e.labelId,
            a = e.type;
          if (
            r !== n ||
            a !== o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
          )
            return [];
          var i = u(t);
          return i == null ? [] : [i];
        }),
        i = await o(
          "WAWebBizBroadcastProAudienceIdentityQuery",
        ).resolveProAudienceLids(a),
        l = new Set(i.values());
      return babelHelpers.extends(
        {
          recipientLids: Array.from(new Set(e)).filter(function (e) {
            return l.has(e);
          }),
          unavailableReason: null,
        },
        r == null ? {} : { listName: r.name },
      );
    }
    function s(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.associationId,
          a = n.labelId,
          i = n.type;
        if (
          i === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid &&
          u(r) != null
        ) {
          var l;
          t.set(a, ((l = t.get(a)) != null ? l : 0) + 1);
        }
      }
      var s = null,
        c = 0;
      for (var d of t) {
        var m = d[0],
          p = d[1];
        p > c && ((s = m), (c = p));
      }
      return s;
    }
    function u(e) {
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
