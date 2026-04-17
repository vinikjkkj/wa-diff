__d(
  "DataAttributeUtils",
  ["cr:6669", "vulture"],
  function (t, n, r, o, a, i, l) {
    var e = [];
    function s(e, t) {
      for (var n = e; n; ) {
        if (t(n)) return n;
        n = n.parentNode;
      }
      return null;
    }
    function u(e, t) {
      var n = s(e, function (e) {
        return e instanceof Element && !!e.getAttribute(t);
      });
      return n instanceof Element ? n : null;
    }
    var c = {
        LEGACY_CLICK_TRACKING_ATTRIBUTE: "data-ft",
        CLICK_TRACKING_DATASTORE_KEY: "data-ft",
        ENABLE_STORE_CLICK_TRACKING: "data-fte",
        IMPRESSION_TRACKING_CONFIG_ATTRIBUTE: "data-xt-vimp",
        IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY: "data-xt-vimp",
        REMOVE_LEGACY_TRACKING: "data-ftr",
        getDataAttribute: function (t, n) {
          return d[n] ? d[n](t) : t.getAttribute(n);
        },
        setDataAttribute: function (t, n, o) {
          return (
            r("vulture")("4Lu3FLmMjrQLLrcn2EWCQmlxy8I="),
            m[n] ? m[n](t, o) : t.setAttribute(n, o)
          );
        },
        getDataFt: function (t) {
          if (t.getAttribute(c.ENABLE_STORE_CLICK_TRACKING)) {
            var e = n("cr:6669").get(t, c.CLICK_TRACKING_DATASTORE_KEY);
            return (
              e ||
                (e = c.moveClickTrackingToDataStore(
                  t,
                  t.getAttribute(c.REMOVE_LEGACY_TRACKING),
                )),
              e
            );
          }
          return t.getAttribute(c.LEGACY_CLICK_TRACKING_ATTRIBUTE);
        },
        setDataFt: function (t, o) {
          if (
            (r("vulture")("udipsc6pHDBpYf1B82yT_X07kUQ="),
            t.getAttribute(c.ENABLE_STORE_CLICK_TRACKING))
          ) {
            n("cr:6669").set(t, c.CLICK_TRACKING_DATASTORE_KEY, o);
            return;
          }
          t.setAttribute(c.LEGACY_CLICK_TRACKING_ATTRIBUTE, o);
        },
        moveXTVimp: function (n) {
          (c.moveAttributeToDataStore(
            n,
            c.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE,
            c.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY,
          ),
            e.push(n.id));
        },
        getXTrackableElements: function () {
          for (
            var t = e
                .map(function (e) {
                  return document.getElementById(e);
                })
                .filter(function (e) {
                  return !!e;
                }),
              n = document.querySelectorAll("[data-xt-vimp]"),
              r = 0;
            r < n.length;
            r++
          )
            t.push(n[r]);
          return t;
        },
        getDataAttributeGeneric: function (t, r, o) {
          var e = n("cr:6669").get(t, o);
          return e !== void 0 ? e : t.getAttribute(r);
        },
        moveAttributeToDataStore: function (t, r, o) {
          var e = t.getAttribute(r);
          e && (n("cr:6669").set(t, o, e), t.removeAttribute(r));
        },
        moveClickTrackingToDataStore: function (t, r) {
          var e = t.getAttribute(c.LEGACY_CLICK_TRACKING_ATTRIBUTE);
          return (
            e &&
              (n("cr:6669").set(t, c.CLICK_TRACKING_DATASTORE_KEY, e),
              r && t.removeAttribute(c.LEGACY_CLICK_TRACKING_ATTRIBUTE)),
            e
          );
        },
        getClickTrackingParent: function (t) {
          var e =
            u(t, c.LEGACY_CLICK_TRACKING_ATTRIBUTE) ||
            u(t, c.ENABLE_STORE_CLICK_TRACKING);
          return e;
        },
        getClickTrackingElements: function (t) {
          return (
            r("vulture")("UD4mgJGkBuRrGcZUyC1Vmuz5VdU="),
            t.querySelectorAll(
              "[" +
                c.LEGACY_CLICK_TRACKING_ATTRIBUTE +
                "], [" +
                c.ENABLE_STORE_CLICK_TRACKING +
                "]",
            )
          );
        },
        getParentByAttributeOrDataStoreKey: function (t, r, o) {
          for (
            ;
            t &&
            (!t.getAttribute || !t.getAttribute(r)) &&
            n("cr:6669").get(t, o) === void 0;
          )
            t = t.parentNode;
          return t;
        },
      },
      d = {
        "data-ft": c.getDataFt,
        "data-xt-vimp": function (t) {
          return c.getDataAttributeGeneric(t, "data-xt-vimp", "data-xt-vimp");
        },
        "data-ad": function (t) {
          return c.getDataAttributeGeneric(t, "data-ad", "data-ad");
        },
        "data-xt": function (t) {
          return c.getDataAttributeGeneric(t, "data-xt", "data-xt");
        },
      },
      m = {
        "data-ft": c.setDataFt,
        "data-xt": function (t, o) {
          (r("vulture")("1Ugsn9aTvy7Oqk3EO6sw5w69Kt0="),
            n("cr:6669").set(t, "data-xt", o));
        },
      },
      p = c;
    l.default = p;
  },
  98,
);
