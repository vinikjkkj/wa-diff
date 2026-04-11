__d(
  "BootloaderEvents",
  ["Arbiter", "objectValues"],
  function (t, n, r, o, a, i, l) {
    var e = "bootloader/bootload",
      s = "bootloader/bootload_started",
      u = "bootloader/callback_timeout",
      c = "bootloader/defer_timeout",
      d = "hasteResponse/handle",
      m = "bootloader/resource_in_longtail_bt_manifest",
      p = "bootloader/bootload_error",
      _ = "bootloader/bootload_endpoint_error",
      f = new (r("Arbiter"))(),
      g = new Set(),
      h = new Set(),
      y = !1;
    function C(e, t) {
      return "haste_response_ef:" + e + ":" + (t != null ? t : "<unknown>");
    }
    function b(e) {
      var t = new Map();
      for (var n of r("objectValues")(e))
        for (var o of n) {
          var a = o[0],
            i = o[1];
          t.set(a, i);
        }
      return t;
    }
    function v() {
      return {
        blocking: new Map(),
        nonblocking: new Map(),
        default: new Map(),
      };
    }
    function S(e) {
      (g.add(e), f.inform(s, e, "persistent"));
    }
    function R(t) {
      (g.delete(t), f.inform(e, t, "persistent"));
    }
    function L(e, t) {
      h.add(C(e, t));
    }
    function E(e, t, n) {
      f.inform(C(e, t), n, "persistent");
    }
    function k(e) {
      f.inform(c, e, "persistent");
    }
    function I(e) {
      return f.subscribe(s, function (t, n) {
        return e(n);
      });
    }
    function T(t) {
      return f.subscribe(e, function (e, n) {
        return t(n);
      });
    }
    function D(e) {
      return f.subscribe(c, function (t, n) {
        return e(n);
      });
    }
    function x() {
      return new Set(g);
    }
    function $(e) {
      f.inform(d, e, "persistent");
    }
    function P(e) {
      return f.subscribe(d, function (t, n) {
        var r = C(n.source, n.sourceDetail);
        if (h.has(r)) {
          f.subscribe(r, function (t, r) {
            return e(babelHelpers.extends({}, n, { efData: r }));
          });
          return;
        }
        e(n);
      });
    }
    function N(e) {
      return f.subscribe(m, function (t, n) {
        e(n);
      });
    }
    function M() {
      return y;
    }
    function w(e, t) {
      ((y = !0), f.inform(m, { hashes: e, source: t }, "persistent"));
    }
    function A(e) {
      return f.subscribe(u, function (t, n) {
        e(n);
      });
    }
    function F(e) {
      f.inform(u, e, "persistent");
    }
    function O(e) {
      return f.subscribe(p, function (t, n) {
        return e(n);
      });
    }
    function B(e) {
      f.inform(p, e, "persistent");
    }
    function W(e) {
      return f.subscribe(_, function (t, n) {
        return e(n);
      });
    }
    function q(e) {
      f.inform(_, e, "persistent");
    }
    ((l.flattenResourceMapSet = b),
      (l.newResourceMapSet = v),
      (l.notifyBootloadStart = S),
      (l.notifyBootload = R),
      (l.notifyHasteResponseEFStart = L),
      (l.notifyHasteResponseEF = E),
      (l.notifyDeferTimeout = k),
      (l.onBootloadStarted = I),
      (l.onBootload = T),
      (l.onDeferTimeout = D),
      (l.getActiveBootloads = x),
      (l.notifyHasteResponse = $),
      (l.onHasteResponse = P),
      (l.onResourceInLongTailBTManifest = N),
      (l.getHasDetectedResourceInLongTailBTManifest = M),
      (l.notifyResourceInLongTailBTManifest = w),
      (l.onBootloaderCallbackTimeout = A),
      (l.notifyBootloaderCallbackTimeout = F),
      (l.onBootloadError = O),
      (l.notifyBootloadError = B),
      (l.onBootloadEndpointError = W),
      (l.notifyBootloadEndpointError = q));
  },
  98,
);
