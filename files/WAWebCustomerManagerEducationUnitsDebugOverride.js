__d(
  "WAWebCustomerManagerEducationUnitsDebugOverride",
  [
    "WAWebCustomerManagerEducationVideos",
    "WAWebCustomerManagerEducationVideosConfig",
    "WAWebCustomerManagerGating",
    "WAWebNullFunc",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsStore",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 50,
      u = 144,
      c = 82,
      d = 659,
      m = 409,
      p = "https://faq.whatsapp.com/1500187031836082",
      _ = b();
    function f() {
      return o(
        "WAWebCustomerManagerGating",
      ).customerManagerNuxDebugToolsEnabled()
        ? _
        : null;
    }
    function g(e) {
      y(e, e == null ? void 0 : e.map(o("WAWebNullFunc").returnNull));
    }
    function h() {
      var e = k();
      return (
        y(
          e,
          E.map(function (e) {
            return e.clip;
          }),
        ),
        e
      );
    }
    function y(e, t) {
      ((_ = e),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_CUSTOMER_MANAGER_EDUCATION_UNITS,
          e == null
            ? null
            : e.map(function (e, n) {
                var r;
                return C(e, (r = t == null ? void 0 : t[n]) != null ? r : null);
              }),
        ));
    }
    function C(e, t) {
      var n, r, o, a, i, l, s;
      return {
        body: (n = e.body) != null ? n : null,
        clip: t != null ? t : null,
        ctaLabel: (r = e.ctaLabel) != null ? r : null,
        ctaUrl: (o = e.ctaUrl) != null ? o : null,
        durationSeconds: (a = e.durationSeconds) != null ? a : null,
        id: e.id,
        mediaType: e.mediaType,
        mediaUrl: (i = e.mediaUrl) != null ? i : null,
        posterUrl: (l = e.posterUrl) != null ? l : null,
        thumbnailUrl: (s = e.thumbnailUrl) != null ? s : null,
        title: e.title,
      };
    }
    function b() {
      var e = r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_CUSTOMER_MANAGER_EDUCATION_UNITS,
      );
      if (e == null) return null;
      var t = v(e);
      return (
        t == null &&
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_CUSTOMER_MANAGER_EDUCATION_UNITS,
            null,
          ),
        t
      );
    }
    function v(e) {
      if (!Array.isArray(e)) return null;
      var t = [];
      for (var n of e) {
        var r = S(n);
        if (r == null) return null;
        t.push(r);
      }
      return t;
    }
    function S(e) {
      if (typeof e != "object" || e == null || Array.isArray(e)) return null;
      var t = e.id,
        n = e.mediaType,
        r = e.title;
      if (
        typeof t != "string" ||
        typeof r != "string" ||
        (n !== "image" && n !== "video")
      )
        return null;
      var a = R(e.clip),
        i = n,
        l = R(e.mediaUrl);
      if (a != null) {
        var s,
          u = o(
            "WAWebCustomerManagerEducationVideos",
          ).getCustomerManagerEducationVideoUrl(a);
        ((i = u == null ? "image" : "video"),
          (l = (s = u != null ? u : R(e.posterUrl)) != null ? s : l));
      }
      return {
        body: R(e.body),
        ctaLabel: R(e.ctaLabel),
        ctaUrl: R(e.ctaUrl),
        durationSeconds:
          typeof e.durationSeconds == "number" ? e.durationSeconds : null,
        id: t,
        mediaType: i,
        mediaUrl: l,
        posterUrl: R(e.posterUrl),
        thumbnailUrl: R(e.thumbnailUrl),
        title: r,
      };
    }
    function R(e) {
      return typeof e == "string" ? e : null;
    }
    function L(e) {
      var t = x(e),
        n = t.durationSeconds,
        r = t.mediaUrl;
      return [
        {
          body: "Every customer you message lands here, with the fields you care about.",
          ctaLabel: "Learn more",
          ctaUrl: p,
          durationSeconds: n,
          id: "cm_debug_intro",
          mediaType: "video",
          mediaUrl: r,
          posterUrl: $(d, m, "#25D366"),
          thumbnailUrl: $(u, c, "#25D366"),
          title: "Get started with Customer manager",
        },
        {
          body: "Group customers into lists and filter the table down to one of them.",
          id: "cm_debug_lists",
          mediaType: "image",
          mediaUrl: $(d, m, "#128C7E"),
          thumbnailUrl: $(u, c, "#128C7E"),
          title: "Organize customers into lists",
        },
        {
          durationSeconds: n,
          id: "cm_debug_pipeline",
          mediaType: "video",
          mediaUrl: r,
          posterUrl: $(d, m, "#34B7F1"),
          thumbnailUrl: $(u, c, "#34B7F1"),
          title: "Move a lead through the pipeline",
        },
      ];
    }
    var E = [
      {
        body: "Every customer you message lands here, with the fields you care about.",
        clip: "intro",
        color: "#25D366",
        ctaLabel: "Learn more",
        ctaUrl: p,
        title: "Get started with Customer manager",
      },
      {
        body: "Group customers into lists and filter the table down to one of them.",
        clip: "lists",
        color: "#128C7E",
        title: "Organize customers into lists",
      },
      {
        clip: "pipeline",
        color: "#34B7F1",
        title: "Move a lead through the pipeline",
      },
      {
        body: "A 9:16 cut, to show whether an off-ratio clip is letterboxed or cropped.",
        clip: "tall",
        color: "#075E54",
        title: "Portrait clip",
      },
    ];
    function k() {
      return E.map(function (e) {
        var t = o(
            "WAWebCustomerManagerEducationVideos",
          ).getCustomerManagerEducationVideoUrl(e.clip),
          n = D(e.color);
        return {
          body: e.body,
          ctaLabel: e.ctaLabel,
          ctaUrl: e.ctaUrl,
          id: "cm_debug_" + e.clip,
          mediaType: t == null ? "image" : "video",
          mediaUrl: t != null ? t : n.mediaUrl,
          posterUrl: n.mediaUrl,
          thumbnailUrl: n.thumbnailUrl,
          title: e.title,
        };
      });
    }
    function I() {
      var e = r("WAWebCustomerManagerEducationVideosConfig").videos,
        t = Object.keys(e);
      return t.length === 0
        ? "No education video cuts are checked in."
        : t
            .map(function (t) {
              return T(t, e[t]);
            })
            .join(" | ");
    }
    function T(e, t) {
      var n;
      if (t == null) return e + ": no cuts";
      var r = Object.keys(t),
        a = o(
          "WAWebCustomerManagerEducationVideos",
        ).getCustomerManagerEducationVideoUrl(e),
        i =
          (n = r.find(function (e) {
            return t[e] === a;
          })) != null
            ? n
            : "none";
      return e + ": serving " + i + " (have " + r.toSorted().join(", ") + ")";
    }
    function D(e) {
      return { mediaUrl: $(d, m, e), thumbnailUrl: $(u, c, e) };
    }
    function x(t) {
      return t === "hatch"
        ? { durationSeconds: e, mediaUrl: r("bx").getURL(r("bx")("46609")) }
        : t === "login_hq"
          ? { durationSeconds: s, mediaUrl: r("bx").getURL(r("bx")("9565")) }
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    }
    function $(e, t, n) {
      var r =
        '<svg xmlns="http://www.w3.org/2000/svg" width="' +
        e +
        '" height="' +
        t +
        '"><rect width="' +
        e +
        '" height="' +
        t +
        '" fill="' +
        n +
        '"/></svg>';
      return "data:image/svg+xml," + encodeURIComponent(r);
    }
    ((l.getCustomerManagerEducationUnitsOverride = f),
      (l.setCustomerManagerEducationUnitsOverride = g),
      (l.seedCustomerManagerLocalizedEducationUnits = h),
      (l.buildCustomerManagerEducationUnitsFixture = L),
      (l.buildCustomerManagerLocalizedEducationUnitsFixture = k),
      (l.describeCustomerManagerEducationClips = I),
      (l.buildCustomerManagerEducationDebugPlaceholders = D));
  },
  98,
);
