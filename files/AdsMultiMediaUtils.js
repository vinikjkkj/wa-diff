__d(
  "AdsMultiMediaUtils",
  ["$InternalEnum", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["HEADLINE", "DESCRIPTION", "MESSAGE"]);
    function s(t, n) {
      var r, o, a, i, l, s;
      return n === e.HEADLINE
        ? (r =
            (o = t.creative) == null ||
            (o = o.media_sourcing_spec) == null ||
            (o = o.titles) == null
              ? void 0
              : o.map(function (e) {
                  var t;
                  return (t = e == null ? void 0 : e.text) != null ? t : "";
                })) != null
          ? r
          : []
        : n === e.DESCRIPTION
          ? (a =
              (i = t.creative) == null ||
              (i = i.media_sourcing_spec) == null ||
              (i = i.descriptions) == null
                ? void 0
                : i.map(function (e) {
                    var t;
                    return (t = e == null ? void 0 : e.text) != null ? t : "";
                  })) != null
            ? a
            : []
          : n === e.MESSAGE
            ? (l =
                (s = t.creative) == null ||
                (s = s.media_sourcing_spec) == null ||
                (s = s.bodies) == null
                  ? void 0
                  : s.map(function (e) {
                      var t;
                      return (t = e == null ? void 0 : e.text) != null ? t : "";
                    })) != null
              ? l
              : []
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              })();
    }
    function u(t, n) {
      var r, o, a, i, l, s;
      return n === e.HEADLINE
        ? (r =
            (o = t.creative) == null ||
            (o = o.media_sourcing_spec) == null ||
            (o = o.titles) == null
              ? void 0
              : o.map(function (e) {
                  var t;
                  return {
                    text: (t = e == null ? void 0 : e.text) != null ? t : "",
                    asset_source: e == null ? void 0 : e.asset_source,
                  };
                })) != null
          ? r
          : []
        : n === e.DESCRIPTION
          ? (a =
              (i = t.creative) == null ||
              (i = i.media_sourcing_spec) == null ||
              (i = i.descriptions) == null
                ? void 0
                : i.map(function (e) {
                    var t;
                    return {
                      text: (t = e == null ? void 0 : e.text) != null ? t : "",
                      asset_source: null,
                    };
                  })) != null
            ? a
            : []
          : n === e.MESSAGE
            ? (l =
                (s = t.creative) == null ||
                (s = s.media_sourcing_spec) == null ||
                (s = s.bodies) == null
                  ? void 0
                  : s.map(function (e) {
                      var t;
                      return {
                        text:
                          (t = e == null ? void 0 : e.text) != null ? t : "",
                        asset_source: e == null ? void 0 : e.asset_source,
                      };
                    })) != null
              ? l
              : []
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    n,
                );
              })();
    }
    var c = n("$InternalEnum").Mirrored([
      "SELECT_MEDIA",
      "EDIT",
      "NONE",
      "REMOVE",
    ]);
    function d(e, t, n, r) {
      return e === c.SELECT_MEDIA
        ? t
        : e === c.EDIT
          ? n
          : e === c.NONE
            ? function () {}
            : e === c.REMOVE
              ? r
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function m(e) {
      var t,
        n,
        r,
        o =
          (t = e.creative) == null || (t = t.media_sourcing_spec) == null
            ? void 0
            : t.titles,
        a =
          (n = e.creative) == null || (n = n.media_sourcing_spec) == null
            ? void 0
            : n.descriptions,
        i =
          (r = e.creative) == null || (r = r.media_sourcing_spec) == null
            ? void 0
            : r.bodies;
      return (
        (o != null && o.length > 1) ||
        (a != null && a.length > 1) ||
        (i != null && i.length > 1)
      );
    }
    function p(e) {
      var t, n;
      if (e == null) return !1;
      var r = (t = e.images) != null ? t : [],
        o = (n = e.videos) != null ? n : [];
      return (
        r.some(function (e) {
          return (e == null ? void 0 : e.destination_customizations) != null;
        }) ||
        o.some(function (e) {
          return (e == null ? void 0 : e.destination_customizations) != null;
        })
      );
    }
    function _() {
      return r("gkx")("8666");
    }
    function f(e, t) {
      return e === !0 && (t ? r("gkx")("23234") : r("gkx")("18264"));
    }
    function g(e, t, n) {
      return !e || t !== !0
        ? !1
        : n === "silent"
          ? r("gkx")("10334")
          : r("gkx")("8321");
    }
    function h(e) {
      return e === "silent" ? r("gkx")("474") : r("gkx")("583");
    }
    function y(e) {
      return e === "silent" ? r("gkx")("15575") : r("gkx")("15743");
    }
    ((l.MultiMediaTextType = e),
      (l.getMultiTextDataFromAdgroup = s),
      (l.getMultiTextSpecsFromAdgroup = u),
      (l.MultiMediaButtonType = c),
      (l.getButtonOnClick = d),
      (l.hasMultiTextInMSS = m),
      (l.hasDestinationCustomizations = p),
      (l.shouldClearDestinationCustomizations = _),
      (l.isMediaRecommendationEnabled = f),
      (l.isEligibleForPerMediaOptOut = g),
      (l.isPrimaryMediaDestinationCustomizationEnabled = h),
      (l.isPrimaryMediaTextCustomizationEnabled = y));
  },
  98,
);
