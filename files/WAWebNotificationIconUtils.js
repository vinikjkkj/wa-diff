__d(
  "WAWebNotificationIconUtils",
  [
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
    "bx",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (u = r("bx")).getURL(u("11319")),
      d = u.getURL(u("110728")),
      m = u.getURL(u("9555")),
      p = u.getURL(u("9556")),
      _ = u.getURL(u("11370")),
      f = 1500;
    function g(e) {
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? _
        : o("WAWebChatGetters").getIsGroup(e)
          ? m
          : p;
    }
    async function h(e, t, n) {
      return e.isLocked ? c : y(e.id, t, n != null ? n : g(e));
    }
    function y(t, n, a) {
      return o("WAPromiseTimeout")
        .promiseTimeout(
          r("WAPromiseRaceAbort")(
            o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(
              t,
            ),
            n,
          ),
          f,
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
    var C = 192,
      b = 8,
      v = 160,
      S = 24,
      R = 76,
      L = 17,
      E = 4,
      k = 250,
      I = 5e3,
      T = 10,
      D = new (o("WALRUMap").LRUMap)({ max: T }),
      x = new Set(),
      $ = null;
    async function P(e, t) {
      if (r("WAWebEnvironment").isWindows || x.has(e)) return e;
      try {
        return await o("WAPromiseTimeout").promiseTimeout(
          M(e),
          Math.min(t, k),
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
    }
    function N() {
      r("WAWebEnvironment").isWindows || w().catch(r("WAWebNoop"));
    }
    function M(e) {
      var t = D.get(e);
      if (t != null) return t;
      var n = A(e);
      n.catch(function () {
        x.add(e);
      });
      var r = Promise.all([n, w()]).then(function (t) {
        var n = t[0],
          r = t[1];
        try {
          return F(n, r);
        } catch (t) {
          throw (x.add(e), t);
        }
      });
      return (
        D.set(e, r),
        r.catch(function () {
          D.get(e) === r && D.delete(e);
        }),
        r
      );
    }
    function w() {
      if ($ != null) return $;
      var e = A(c);
      return (
        ($ = e),
        e.catch(function () {
          $ === e && ($ = null);
        }),
        e
      );
    }
    function A(e) {
      return o("WAPromiseTimeout").promiseTimeout(
        o("WAWebMediaLoad").loadImage(e),
        I,
        "callNotificationIconLoadTimeout",
      );
    }
    function F(e, t) {
      var n = o("WAWebCanvasUtils").createCanvas(C, C),
        a = n.getContext("2d");
      if (!(a instanceof CanvasRenderingContext2D))
        throw r("err")("2d canvas context is unavailable");
      if (e.width === 0 || e.height === 0 || t.width === 0 || t.height === 0)
        throw r("err")("cannot badge an image with zero width or height");
      (a.save(),
        O(a, b, v, S),
        a.clip(),
        B({ context: a, dh: v, dw: v, dx: b, dy: b, img: e }),
        a.restore());
      var i = C - b - R;
      return (
        (a.globalCompositeOperation = "destination-out"),
        O(a, i - E, R + 2 * E, L + E),
        a.fill(),
        (a.globalCompositeOperation = "source-over"),
        a.save(),
        O(a, i, R, L),
        a.clip(),
        B({ context: a, dh: R, dw: R, dx: i, dy: i, img: t }),
        a.restore(),
        n.toDataURL("image/png")
      );
    }
    function O(e, t, n, r) {
      var o = t + n;
      (e.beginPath(),
        e.moveTo(t + r, t),
        e.arcTo(o, t, o, o, r),
        e.arcTo(o, o, t, o, r),
        e.arcTo(t, o, t, t, r),
        e.arcTo(t, t, o, t, r),
        e.closePath());
    }
    function B(e) {
      var t = e.context,
        n = e.dh,
        r = e.dw,
        o = e.dx,
        a = e.dy,
        i = e.img,
        l = Math.max(r / i.width, n / i.height),
        s = r / l,
        u = n / l;
      t.drawImage(i, (i.width - s) / 2, (i.height - u) / 2, s, u, o, a, r, n);
    }
    ((l.WHATSAPP_DEFAULT_ICON = c),
      (l.WHATSAPP_BUSINESS_DEFAULT_ICON = d),
      (l.USER_DEFAULT_ICON = p),
      (l.NOTIFICATION_ICON_TIMEOUT_MS = f),
      (l.getDefaultChatNotificationIcon = g),
      (l.getChatNotificationIcon = h),
      (l.getNotificationIconByWid = y),
      (l.addWhatsAppBadgeToIcon = P),
      (l.preloadWhatsAppBadge = N));
  },
  98,
);
