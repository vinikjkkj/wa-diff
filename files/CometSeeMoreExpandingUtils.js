__d(
  "CometSeeMoreExpandingUtils",
  ["UnicodeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      for (
        var n = t;
        n >= 0 && !(e.charAt(n) === " " || e.charAt(n) === "\n");
      )
        n -= 1;
      e.charAt(t) !== "\n" ? (n += 1) : (n = t + 1);
      var r = e.substring(n),
        o = /\s/,
        a = r.search(o) + n - 1;
      return { truncatedEntityEndIndex: a, truncatedEntityOffset: n };
    }
    function u(e, t, n) {
      var r = [],
        o = s(t, n),
        a = o.truncatedEntityEndIndex,
        i = o.truncatedEntityOffset,
        l = i,
        u = !1;
      for (var c of e) {
        var d = c.entity,
          m = c.entity_type,
          p = c.length,
          _ = c.offset;
        _ != null &&
          p != null &&
          d != null &&
          d.__typename != null &&
          (r.push({ entity: d, entity_type: m, length: p, offset: _ }),
          !u && _ + p >= a && l >= _ && ((l = _), (u = !0)));
      }
      return (
        u ||
          r.push({
            entity: { __typename: "SeeMoreTruncation" },
            entity_type: "SEE_MORE_ANCHOR",
            length: 0,
            offset: l,
          }),
        { newEntityRanges: r, newTruncatedEntityOffset: l }
      );
    }
    function c(e, t) {
      var n = [],
        r = [];
      if (t != null)
        for (var o of e) {
          var a = o.entity,
            i = o.entity_type,
            l = o.length,
            s = o.offset;
          s != null &&
            l != null &&
            a != null &&
            a.__typename != null &&
            (s < t
              ? (n.push({ entity: a, entity_type: i, length: l, offset: s }),
                s + l > t &&
                  r.push({
                    entity: a,
                    entity_type: i,
                    length: s + l - t,
                    offset: 0,
                  }))
              : r.push({
                  entity: a,
                  entity_type: i,
                  length: l,
                  offset: s - t,
                }));
        }
      return {
        entitiesBeforeTruncatedOffset: n,
        entitiesFromTruncatedOffset: r,
      };
    }
    function d(e, t, n) {
      var r = u(e, t, n),
        o = r.newEntityRanges,
        a = r.newTruncatedEntityOffset,
        i = c(o, a),
        l = i.entitiesBeforeTruncatedOffset,
        s = i.entitiesFromTruncatedOffset;
      return {
        entitiesBeforeTruncatedOffset: l,
        entitiesFromTruncatedOffset: s,
        newTruncatedEntityOffset: a,
      };
    }
    function m(t, n, r) {
      var a = [],
        i = [],
        l = -1,
        s = -1,
        u = -1;
      if (!t)
        return {
          filteredEntitiesBeforeTruncatedPosition: a,
          filteredEntitiesFromTruncatedPosition: i,
          hiddenContentOffset: l,
          truncatedLineIndex: s,
          truncatedParagraphIndex: u,
        };
      for (var c = 0, m = 0, p = 0; p < n.length; p++) {
        var _ = n[p];
        if (Array.isArray(_) && r != null && r.current != null)
          for (var f = r.current, g = 0; g < _.length; g++) {
            var h = _[g].ranges,
              y = _[g].text,
              C = (e || (e = o("UnicodeUtils"))).strlen(y);
            if (((m = f - c), (c += C), u < 0 && m >= 0 && c >= f)) {
              ((u = p), (s = g));
              var b = d(h, y, f - c + C),
                v = b.entitiesBeforeTruncatedOffset,
                S = b.entitiesFromTruncatedOffset,
                R = b.newTruncatedEntityOffset;
              ((a = v), (i = S), (l = R));
              break;
            }
          }
        if (u >= 0 && s >= 0) break;
      }
      return {
        filteredEntitiesBeforeTruncatedPosition: a,
        filteredEntitiesFromTruncatedPosition: i,
        hiddenContentOffset: l,
        truncatedLineIndex: s,
        truncatedParagraphIndex: u,
      };
    }
    ((l.getTruncatedEntityRangesAfterExpandingSeeMore = u),
      (l.splitEntityRangesIntoRegularAndHiddenParts = c),
      (l.getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts = d),
      (l.filterParagraphsGetTruncatedLinesEntityRangesAndIndex = m));
  },
  98,
);
