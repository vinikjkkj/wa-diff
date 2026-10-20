__d(
  "WAWebNotificationIconUtils",
  [
    "Promise",
    "WAAbortError",
    "WACustomError",
    "WAFilteredCatch",
    "WALRUMap",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "WAWebChatGetters",
    "WAWebEnvironment",
    "WAWebMediaLoad",
    "WAWebNoop",
    "WAWebNotificationTone",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "asyncToGeneratorRuntime",
    "bx",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (c = r("bx")).getURL(c("11319")),
      m = c.getURL(c("110728")),
      p = c.getURL(c("9555")),
      _ = c.getURL(c("9556")),
      f = c.getURL(c("11370")),
      g = 1500;
    function h(e) {
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? f
        : o("WAWebChatGetters").getIsGroup(e)
          ? p
          : _;
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return e.isLocked ? d : b(e.id, t, n != null ? n : h(e));
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, n, a) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          r("WAPromiseRaceAbort")(
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(
              t,
            ),
            n,
          ),
          g,
          "showNotificationTimeout",
        )
        .then(function (e) {
          var t;
          if (n.aborted) throw new (o("WAAbortError").AbortError)();
          var r =
            (t = o("WAWebProfilePicThumbGetters").getMaybeImg(e)) != null
              ? t
              : a;
          return o("WAWebNotificationTone").cachePath(r);
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WACustomError").TimeoutError,
            function (n) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "NotificationBackend:IconLoadTimeoutError:",
                      "",
                    ])),
                  t.toString(),
                ),
                o("WAWebNotificationTone").cachePath(a)
              );
            },
          ),
        );
    }
    var v = 192,
      S = 8,
      R = 160,
      L = 24,
      E = 76,
      k = 17,
      I = 4,
      T = 250,
      D = 5e3,
      x = 10,
      $ = new (o("WALRUMap").LRUMap)({ max: x }),
      P = new Set(),
      N = null;
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("WAWebEnvironment").isWindows || P.has(e)) return e;
          try {
            return yield o("WAPromiseTimeout").promiseTimeout(
              F(e),
              Math.min(t, T),
              "callNotificationIconBadgeTimeout",
            );
          } catch (t) {
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "NotificationBackend:IconBadgeError",
                  ])),
              ),
              e
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      r("WAWebEnvironment").isWindows || O().catch(r("WAWebNoop"));
    }
    function F(e) {
      var t = $.get(e);
      if (t != null) return t;
      var r = B(e);
      r.catch(function () {
        P.add(e);
      });
      var o = (u || (u = n("Promise"))).all([r, O()]).then(function (t) {
        var n = t[0],
          r = t[1];
        try {
          return W(n, r);
        } catch (t) {
          throw (P.add(e), t);
        }
      });
      return (
        $.set(e, o),
        o.catch(function () {
          $.get(e) === o && $.delete(e);
        }),
        o
      );
    }
    function O() {
      if (N != null) return N;
      var e = B(d);
      return (
        (N = e),
        e.catch(function () {
          N === e && (N = null);
        }),
        e
      );
    }
    function B(e) {
      return o("WAPromiseTimeout").promiseTimeout(
        o("WAWebMediaLoad").loadImage(e),
        D,
        "callNotificationIconLoadTimeout",
      );
    }
    function W(e, t) {
      var n = o("WAWebCanvasUtils").createCanvas(v, v),
        a = n.getContext("2d");
      if (!(a instanceof CanvasRenderingContext2D))
        throw r("err")("2d canvas context is unavailable");
      if (e.width === 0 || e.height === 0 || t.width === 0 || t.height === 0)
        throw r("err")("cannot badge an image with zero width or height");
      (a.save(), q(a, S, R, L), a.clip(), U(a, e, S, S, R, R), a.restore());
      var i = v - S - E;
      return (
        (a.globalCompositeOperation = "destination-out"),
        q(a, i - I, E + 2 * I, k + I),
        a.fill(),
        (a.globalCompositeOperation = "source-over"),
        a.save(),
        q(a, i, E, k),
        a.clip(),
        U(a, t, i, i, E, E),
        a.restore(),
        n.toDataURL("image/png")
      );
    }
    function q(e, t, n, r) {
      var o = t + n;
      (e.beginPath(),
        e.moveTo(t + r, t),
        e.arcTo(o, t, o, o, r),
        e.arcTo(o, o, t, o, r),
        e.arcTo(t, o, t, t, r),
        e.arcTo(t, t, o, t, r),
        e.closePath());
    }
    function U(e, t, n, r, o, a) {
      var i = Math.max(o / t.width, a / t.height),
        l = o / i,
        s = a / i;
      e.drawImage(t, (t.width - l) / 2, (t.height - s) / 2, l, s, n, r, o, a);
    }
    ((l.WHATSAPP_DEFAULT_ICON = d),
      (l.WHATSAPP_BUSINESS_DEFAULT_ICON = m),
      (l.USER_DEFAULT_ICON = _),
      (l.NOTIFICATION_ICON_TIMEOUT_MS = g),
      (l.getDefaultChatNotificationIcon = h),
      (l.getChatNotificationIcon = y),
      (l.getNotificationIconByWid = b),
      (l.addWhatsAppBadgeToIcon = M),
      (l.preloadWhatsAppBadge = A));
  },
  98,
);
