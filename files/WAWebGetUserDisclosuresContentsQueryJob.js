__d(
  "WAWebGetUserDisclosuresContentsQueryJob",
  [
    "WAAbortError",
    "WALogger",
    "WAWebBackendApi",
    "WAWebConnModel",
    "WAWebCountryCodeUtils",
    "WAWebHttpErrors",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "WAWebUserNoticeErrorWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumUserNoticeErrorEvent",
    "err",
    "getErrorSafe",
    "isNonZeroNumber",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "https://www.whatsapp.com/user-notice/v1/",
      m = new Set(["ACCEPT", "OK"]),
      p = "zz",
      _ = "ZZ";
    async function f(e) {
      if (o("isNonZeroNumber").isNonZeroNumber(e)) {
        var t,
          n,
          a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          i = o("WAWebCountryCodeUtils").pnToCountryCodeString(a.user),
          l = await o("WAWebBackendApi").frontendSendAndReceive(
            "getDeviceInfo",
            void 0,
          ),
          s = r("WAWebURLUtils").build(d, {
            id: e,
            lg: (t = l.lg) != null ? t : p,
            lc: (n = l.lc) != null ? n : _,
            cc: i,
            platform: o("WAWebConnModel").Conn.isSMB ? "smbweb" : "web",
          });
        return g(s, e);
      }
      return Promise.resolve({ disclosureId: e });
    }
    async function g(t, n) {
      try {
        var a = await y(t);
        try {
          if (a != null) {
            var i = JSON.parse(a);
            if (i != null) return C(i, n);
          }
        } catch (e) {
          var l = new (o(
            "WAWebUserNoticeErrorWamEvent",
          ).UserNoticeErrorWamEvent)({
            userNoticeId: n,
            userNoticeContentVersion: 1,
            userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
              .USER_NOTICE_ERROR_EVENT.JSON_PARSE,
          });
          l.commit();
        }
      } catch (t) {
        var s = r("getErrorSafe")(t);
        if (s.name === o("WAAbortError").ABORT_ERROR) return;
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Notice: Error Message",
                ])),
            )
            .catching(s)
            .sendLogs("pdfn-notice-content-error"),
          new (o("WAWebHttpErrors").HttpNetworkError)()
        );
      }
    }
    async function h(e) {
      return new Promise(function (t, n) {
        var r = new FileReader();
        ((r.onload = function () {
          var e = String(r.result);
          t(e);
        }),
          (r.onerror = n),
          r.readAsDataURL(e));
      });
    }
    async function y(e) {
      var t = new AbortController(),
        n = t.signal,
        o = await r("WAWebPonyfillsFetch")(e, { signal: n }),
        a = o.headers.get("Content-Type");
      return a == null || a.includes("image/svg+xml")
        ? o.text()
        : a.includes("image/png")
          ? h(await o.blob())
          : o.text();
    }
    async function C(e, t) {
      var n = e.policyVersion;
      if (n == null)
        throw r("err")("Missing field policyVersion in notice content.");
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Notice:fetchNoticeData successful for policyVersion ",
            "",
          ])),
        n,
      );
      var a = v(e),
        i = b(e),
        l = parseInt(n, 10),
        c;
      try {
        c = await k(a);
      } catch (e) {
        var d = r("getErrorSafe")(e),
          m = new (o("WAWebUserNoticeErrorWamEvent").UserNoticeErrorWamEvent)({
            userNoticeId: t,
            userNoticeContentVersion: l,
            userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
              .USER_NOTICE_ERROR_EVENT.IMAGE_FETCH,
          });
        (m.commit(),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Notice: Icon fetch error",
                ])),
            )
            .catching(d)
            .sendLogs("notice-icon-fetch-error"));
      }
      return Promise.resolve({
        disclosureId: t,
        policyVersion: l,
        privacyDisclosureModal: c != null ? c : a,
        endDate: i,
      });
    }
    function b(e) {
      var t,
        n =
          e["privacy-disclosure"] &&
          ((t = e["privacy-disclosure"]) == null ||
          (t = t.timing) == null ||
          (t = t.end) == null
            ? void 0
            : t.time);
      return n == null ? null : new Date(n);
    }
    function v(e) {
      var t = e["privacy-disclosure"] && S(e["privacy-disclosure"].prompts[0]);
      return t == null ? null : E(t);
    }
    function S(e) {
      if (e) {
        (R(
          [
            "icon",
            "iconDescription",
            "title",
            "bullets",
            "primaryButton",
            "nav",
          ],
          e,
        ),
          R(["light", "dark", "type"], e.icon),
          R(["dismissButton", "backButton"], e.nav));
        for (var t = 0; t < e.bullets.length; t++)
          R(["icon", "text"], e.bullets[t]);
        var n = e.footer != null ? { footer: e.footer } : {};
        return babelHelpers.extends(
          {
            icon: { light: e.icon.light, dark: e.icon.dark, type: e.icon.type },
            iconSvg: { light: "", dark: "" },
            iconDescription: e.iconDescription,
            title: e.title,
            bullets: e.bullets,
            primaryButton: e.primaryButton,
            nav: {
              dismissButton: e.nav.dismissButton,
              backButton: e.nav.backButton,
            },
          },
          n,
        );
      }
    }
    function R(e, t) {
      e.forEach(function (e) {
        if (!(e in t))
          throw r("err")("Missing field " + e + " in notice content.");
      });
    }
    var L = function (t) {
      if (!t) return null;
      var e = t.action;
      if (e) {
        if (m.has(e)) return t;
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Notice: Unknown action type ",
              "",
            ])),
          e,
        );
      }
      return null;
    };
    function E(e) {
      return e ? ((e.primaryButton = L(e.primaryButton)), e) : null;
    }
    async function k(e) {
      for (
        var t = [
            e == null ? void 0 : e.icon.light,
            e == null ? void 0 : e.icon.dark,
          ],
          n = 0;
        n < ((r = e == null ? void 0 : e.bullets.length) != null ? r : 0);
        n++
      ) {
        var r,
          o = e == null ? void 0 : e.bullets[n];
        o != null && (t.push(o.icon.light), t.push(o.icon.dark));
      }
      for (
        var a = t.map(function (e) {
            return e != null ? y(e) : Promise.resolve(null);
          }),
          i = e,
          l = await Promise.all(a),
          s = l[0],
          u = l[1],
          c = babelHelpers.arrayLikeToArray(l).slice(2),
          d = [],
          m = 0;
        m < ((p = e == null ? void 0 : e.bullets.length) != null ? p : 0);
        m++
      ) {
        var p,
          _ = e == null ? void 0 : e.bullets[m];
        if (_ != null) {
          var f = c[m * 2],
            g = c[m * 2 + 1];
          f != null && g != null
            ? d.push(
                babelHelpers.extends({}, _, { iconSvg: { light: f, dark: g } }),
              )
            : d.push(_);
        }
      }
      return (
        e &&
          s != null &&
          u != null &&
          (i = babelHelpers.extends({}, e, {
            bullets: d,
            iconSvg: { light: s, dark: u },
          })),
        i
      );
    }
    ((l.getUserDisclosureContentsQueryJob = f), (l.attemptFetch = y));
  },
  98,
);
