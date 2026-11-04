__d(
  "WAWebCustomerManagerEducationDebugForm",
  ["WAWebCustomerManagerEducationUnitsDebugOverride"],
  function (t, n, r, o, a, i, l) {
    var e = "#8696A0",
      s = "cm_debug_form_unit_";
    function u() {
      var e = o(
        "WAWebCustomerManagerEducationUnitsDebugOverride",
      ).getCustomerManagerEducationUnitsOverride();
      return e == null ? c() : e.map(y);
    }
    function c() {
      return o("WAWebCustomerManagerEducationUnitsDebugOverride")
        .buildCustomerManagerEducationUnitsFixture("hatch")
        .map(y);
    }
    function d(t) {
      var n = o(
          "WAWebCustomerManagerEducationUnitsDebugOverride",
        ).buildCustomerManagerEducationDebugPlaceholders(e),
        r = n.mediaUrl,
        a = n.thumbnailUrl;
      return {
        body: "",
        ctaLabel: "",
        ctaUrl: "",
        durationSeconds: null,
        id: C(t),
        mediaType: "image",
        mediaUrl: r,
        posterUrl: null,
        thumbnailUrl: a,
        title: "Unit " + (t.length + 1),
      };
    }
    function m(e, t, n) {
      return e.map(function (e) {
        return e.id === t ? g(e, n) : e;
      });
    }
    function p(e, t) {
      return e.filter(function (e) {
        return e.id !== t;
      });
    }
    function _(e, t) {
      var n,
        r,
        o,
        a = e.findIndex(function (e) {
          return e.id === t;
        });
      return a < 0
        ? null
        : (n =
              (r = (o = e[a + 1]) != null ? o : e[a - 1]) == null
                ? void 0
                : r.id) != null
          ? n
          : null;
    }
    function f(e) {
      return e
        .filter(function (e) {
          return e.title.trim() !== "";
        })
        .map(h);
    }
    function g(e, t) {
      var n = t.mediaType != null && t.mediaType !== e.mediaType;
      return n
        ? babelHelpers.extends(
            {},
            e,
            { durationSeconds: null, mediaUrl: "", posterUrl: null },
            t,
          )
        : babelHelpers.extends({}, e, t);
    }
    function h(t) {
      var n,
        r,
        a = o(
          "WAWebCustomerManagerEducationUnitsDebugOverride",
        ).buildCustomerManagerEducationDebugPlaceholders(e),
        i = t.mediaType === "video";
      return {
        body: b(t.body),
        ctaLabel: b(t.ctaLabel),
        ctaUrl: b(t.ctaUrl),
        durationSeconds: t.durationSeconds,
        id: t.id,
        mediaType: t.mediaType,
        mediaUrl: b(t.mediaUrl),
        posterUrl: i ? ((n = t.posterUrl) != null ? n : a.mediaUrl) : null,
        thumbnailUrl: (r = t.thumbnailUrl) != null ? r : a.thumbnailUrl,
        title: t.title.trim(),
      };
    }
    function y(e) {
      var t, n, r, o;
      return {
        body: (t = e.body) != null ? t : "",
        ctaLabel: (n = e.ctaLabel) != null ? n : "",
        ctaUrl: (r = e.ctaUrl) != null ? r : "",
        durationSeconds: e.durationSeconds,
        id: e.id,
        mediaType: e.mediaType,
        mediaUrl: (o = e.mediaUrl) != null ? o : "",
        posterUrl: e.posterUrl,
        thumbnailUrl: e.thumbnailUrl,
        title: e.title,
      };
    }
    function C(e) {
      for (
        var t = new Set(
            e.map(function (e) {
              return e.id;
            }),
          ),
          n = e.length + 1;
        t.has("" + s + n);
      )
        n += 1;
      return "" + s + n;
    }
    function b(e) {
      var t = e.trim();
      return t === "" ? null : t;
    }
    ((l.buildCustomerManagerEducationDraftsFromOverride = u),
      (l.buildCustomerManagerEducationDraftsFromFixture = c),
      (l.createCustomerManagerEducationDraft = d),
      (l.updateCustomerManagerEducationDraft = m),
      (l.removeCustomerManagerEducationDraft = p),
      (l.adjacentCustomerManagerEducationDraftId = _),
      (l.toCustomerManagerEducationUnits = f));
  },
  98,
);
