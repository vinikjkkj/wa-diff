__d(
  "MAIBAPreviewPublishReviewLogging",
  [
    "MAIBAPreviewPublishReviewGroupBuilder",
    "MAIBAPreviewPublishReviewUtils",
    "lengthInUTF8Bytes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32768,
      s = "8";
    function u(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function c(e) {
      var t = o("MAIBAPreviewPublishReviewGroupBuilder").getReviewRowFieldPath(
          e,
        ),
        n = t == null ? {} : { fieldPath: t };
      if (e.beforeImageUrls != null || e.afterImageUrls != null) {
        var r, a, i, l;
        return babelHelpers.extends(
          {
            afterImageCount:
              (r = (a = e.afterImageUrls) == null ? void 0 : a.length) != null
                ? r
                : 0,
            beforeImageCount:
              (i = (l = e.beforeImageUrls) == null ? void 0 : l.length) != null
                ? i
                : 0,
            field: e.field,
          },
          n,
          { kind: "image" },
        );
      }
      var s = babelHelpers.extends(
          { after: e.after, before: e.before, field: e.field },
          n,
        ),
        u = o("MAIBAPreviewPublishReviewGroupBuilder").getReviewRowEntityCounts(
          e,
        );
      return u == null ? s : babelHelpers.extends({}, s, { entityCounts: u });
    }
    function d(e, t) {
      return {
        caption: o("MAIBAPreviewPublishReviewUtils").formatAdObjectCaption(
          e.level,
          e.name,
          e.objectId,
        ),
        fragmentId: e.fragmentId,
        headers: t,
        objectId: e.objectId,
        objectLevel: e.level,
        rows: e.rows.map(c),
      };
    }
    function m(e) {
      return {
        caption: e.caption,
        kind: "ab_test_summary",
        rows: e.rows,
        studyId: e.studyId,
      };
    }
    function p(e) {
      var t,
        n =
          (t = u(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : t.fragments;
      if (!Array.isArray(n)) return [];
      var r = new Set();
      for (var o of n) {
        var a,
          i = (a = u(o)) == null ? void 0 : a.changes;
        if (Array.isArray(i))
          for (var l of i) {
            var s,
              c = (s = u(l)) == null ? void 0 : s.field;
            typeof c == "string" && c !== "" && r.add(c);
          }
      }
      return Array.from(r).sort();
    }
    function _(t, n, a) {
      a === void 0 && (a = []);
      var i = o("MAIBAPreviewPublishReviewUtils").getReviewTableHeaders(
          a.length > 0,
        ),
        l = JSON.stringify(
          [].concat(
            a.map(m),
            t.map(function (e) {
              return d(e, i);
            }),
          ),
        ),
        s = r("lengthInUTF8Bytes")(l),
        u = s > e,
        c = u;
      return {
        fieldKeys: p(n).join(","),
        fragmentIds: t
          .map(function (e) {
            return e.fragmentId;
          })
          .join(","),
        objectIds: t
          .map(function (e) {
            return e.objectId;
          })
          .join(","),
        objectLevels: t
          .map(function (e) {
            return e.level;
          })
          .join(","),
        renderedTables: u ? "" : l,
        renderedTablesByteLength: s,
        rowCount:
          a.reduce(function (e, t) {
            return e + t.rows.length;
          }, 0) +
          t.reduce(function (e, t) {
            return e + t.rows.length;
          }, 0),
        tableCount: a.length + t.length,
        valuesOmitted: c,
      };
    }
    function f(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = e.some(function (e) {
          return e.coversDuplicateIdentity;
        }),
        s = e[0];
      return {
        afterImageCount: l
          ? 0
          : (t = s == null ? void 0 : s.afterImageHashes.length) != null
            ? t
            : 0,
        afterItemCount: l ? e.length + 1 : 0,
        afterTextCount: l
          ? 0
          : (n = s == null ? void 0 : s.afterTexts.length) != null
            ? n
            : 0,
        afterTexts: l
          ? []
          : (r = s == null ? void 0 : s.afterTexts) != null
            ? r
            : [],
        beforeImageCount: l
          ? 0
          : (o = s == null ? void 0 : s.beforeImageHashes.length) != null
            ? o
            : 0,
        beforeItemCount: l ? 1 : 0,
        beforeTextCount: l
          ? 0
          : (a = s == null ? void 0 : s.beforeTexts.length) != null
            ? a
            : 0,
        beforeTexts: l
          ? []
          : (i = s == null ? void 0 : s.beforeTexts) != null
            ? i
            : [],
        kind: "creative_card",
      };
    }
    function g(e, t) {
      var n,
        r = new Set(
          t.map(function (e) {
            return e.fragmentId;
          }),
        ),
        o = [],
        a = [],
        i =
          (n = u(e == null ? void 0 : e.spec_diff)) == null
            ? void 0
            : n.fragments;
      if (!Array.isArray(i)) return { objectIds: o, objectLevels: a };
      for (var l of i) {
        var s = u(l);
        s == null ||
          typeof s.fragment_id != "string" ||
          !r.has(s.fragment_id) ||
          (typeof s.object_id == "string" &&
            s.object_id !== "" &&
            o.push(s.object_id),
          a.push(
            typeof s.object_level == "string" ? s.object_level : "ADGROUP",
          ));
      }
      return { objectIds: o, objectLevels: a };
    }
    function h(t, n, a, i, l) {
      (n === void 0 && (n = []),
        a === void 0 && (a = []),
        i === void 0 && (i = []),
        l === void 0 && (l = n.length + a.length));
      var s = o("MAIBAPreviewPublishReviewUtils").getReviewTableHeaders(
          a.length > 0,
        ),
        u = [].concat(
          a.map(m),
          n.map(function (e) {
            return d(e, s);
          }),
        ),
        c = Math.min(Math.max(l, 0), u.length);
      u.splice(c, 0, f(i));
      var _ = JSON.stringify(u),
        h = r("lengthInUTF8Bytes")(_),
        y = h > e,
        C = new Set(
          n.map(function (e) {
            return e.fragmentId;
          }),
        );
      i.forEach(function (e) {
        return C.add(e.fragmentId);
      });
      var b = new Set(
          n.map(function (e) {
            return e.objectId;
          }),
        ),
        v = new Set(
          n.map(function (e) {
            return e.level;
          }),
        ),
        S = g(t, i);
      return (
        S.objectIds.forEach(function (e) {
          return b.add(e);
        }),
        S.objectLevels.forEach(function (e) {
          return v.add(e);
        }),
        {
          fieldKeys: p(t).join(","),
          fragmentIds: Array.from(C).join(","),
          objectIds: Array.from(b).join(","),
          objectLevels: Array.from(v).join(","),
          renderedTables: y ? "" : _,
          renderedTablesByteLength: h,
          rowCount:
            a.reduce(function (e, t) {
              return e + t.rows.length;
            }, 0) +
            n.reduce(function (e, t) {
              return e + t.rows.length;
            }, 0),
          tableCount: a.length + n.length,
          valuesOmitted: y,
        }
      );
    }
    ((l.PAYLOAD_VERSION = s),
      (l.buildPreviewPublishReviewLoggingSnapshot = _),
      (l.buildPreviewPublishCreativeCardLoggingSnapshot = h));
  },
  98,
);
