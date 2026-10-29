__d(
  "WAWebCustomerManagerEducationUnitsDebugOverride",
  ["bx"],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 50,
      u = 144,
      c = 82,
      d = 659,
      m = 409,
      p = "https://faq.whatsapp.com/1500187031836082",
      _ = null;
    function f() {
      return _;
    }
    function g(e) {
      _ = e;
    }
    function h(e) {
      var t = C(e),
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
          posterUrl: b(d, m, "#25D366"),
          thumbnailUrl: b(u, c, "#25D366"),
          title: "Get started with Customer manager",
        },
        {
          body: "Group customers into lists and filter the table down to one of them.",
          id: "cm_debug_lists",
          mediaType: "image",
          mediaUrl: b(d, m, "#128C7E"),
          thumbnailUrl: b(u, c, "#128C7E"),
          title: "Organize customers into lists",
        },
        {
          durationSeconds: n,
          id: "cm_debug_pipeline",
          mediaType: "video",
          mediaUrl: r,
          posterUrl: b(d, m, "#34B7F1"),
          thumbnailUrl: b(u, c, "#34B7F1"),
          title: "Move a lead through the pipeline",
        },
      ];
    }
    function y(e) {
      return { mediaUrl: b(d, m, e), thumbnailUrl: b(u, c, e) };
    }
    function C(t) {
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
    function b(e, t, n) {
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
      (l.buildCustomerManagerEducationUnitsFixture = h),
      (l.buildCustomerManagerEducationDebugPlaceholders = y));
  },
  98,
);
