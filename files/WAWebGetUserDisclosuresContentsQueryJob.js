__d(
  "WAWebGetUserDisclosuresContentsQueryJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isNonZeroNumber",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "https://www.whatsapp.com/user-notice/v1/",
      p = new Set(["ACCEPT", "OK"]),
      _ = "zz",
      f = "ZZ";
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("isNonZeroNumber").isNonZeroNumber(e)) {
            var t,
              a,
              i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              l = o("WAWebCountryCodeUtils").pnToCountryCodeString(i.user),
              s = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getDeviceInfo",
                void 0,
              ),
              u = r("WAWebURLUtils").build(m, {
                id: e,
                lg: (t = s.lg) != null ? t : _,
                lc: (a = s.lc) != null ? a : f,
                cc: l,
                platform: o("WAWebConnModel").Conn.isSMB ? "smbweb" : "web",
              });
            return y(u, e);
          }
          return (d || (d = n("Promise"))).resolve({ disclosureId: e });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield S(e);
            try {
              if (n != null) {
                var a = JSON.parse(n);
                if (a != null) return L(a, t);
              }
            } catch (e) {
              var i = new (o(
                "WAWebUserNoticeErrorWamEvent",
              ).UserNoticeErrorWamEvent)({
                userNoticeId: t,
                userNoticeContentVersion: 1,
                userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                  .USER_NOTICE_ERROR_EVENT.JSON_PARSE,
              });
              i.commit();
            }
          } catch (e) {
            var l = r("getErrorSafe")(e);
            if (l.name === o("WAAbortError").ABORT_ERROR) return;
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Notice: Error Message",
                    ])),
                )
                .catching(l)
                .sendLogs("pdfn-notice-content-error"),
              new (o("WAWebHttpErrors").HttpNetworkError)()
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return new (d || (d = n("Promise")))(function (t, n) {
            var r = new FileReader();
            ((r.onload = function () {
              var e = String(r.result);
              t(e);
            }),
              (r.onerror = n),
              r.readAsDataURL(e));
          });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new AbortController(),
            n = t.signal,
            o = yield r("WAWebPonyfillsFetch")(e, { signal: n }),
            a = o.headers.get("Content-Type");
          return a == null || a.includes("image/svg+xml")
            ? o.text()
            : a.includes("image/png")
              ? b(yield o.blob())
              : o.text();
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = e.policyVersion;
          if (a == null)
            throw r("err")("Missing field policyVersion in notice content.");
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Notice:fetchNoticeData successful for policyVersion ",
                "",
              ])),
            a,
          );
          var i = I(e),
            l = k(e),
            s = parseInt(a, 10),
            m;
          try {
            m = yield P(i);
          } catch (e) {
            var p = r("getErrorSafe")(e),
              _ = new (o(
                "WAWebUserNoticeErrorWamEvent",
              ).UserNoticeErrorWamEvent)({
                userNoticeId: t,
                userNoticeContentVersion: s,
                userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                  .USER_NOTICE_ERROR_EVENT.IMAGE_FETCH,
              });
            (_.commit(),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Notice: Icon fetch error",
                    ])),
                )
                .catching(p)
                .sendLogs("notice-icon-fetch-error"));
          }
          return (d || (d = n("Promise"))).resolve({
            disclosureId: t,
            policyVersion: s,
            privacyDisclosureModal: m != null ? m : i,
            endDate: l,
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I(e) {
      var t = e["privacy-disclosure"] && T(e["privacy-disclosure"].prompts[0]);
      return t == null ? null : $(t);
    }
    function T(e) {
      if (e) {
        (D(
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
          D(["light", "dark", "type"], e.icon),
          D(["dismissButton", "backButton"], e.nav));
        for (var t = 0; t < e.bullets.length; t++)
          D(["icon", "text"], e.bullets[t]);
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
    function D(e, t) {
      e.forEach(function (e) {
        if (!(e in t))
          throw r("err")("Missing field " + e + " in notice content.");
      });
    }
    var x = function (n) {
      if (!n) return null;
      var t = n.action;
      if (t) {
        if (p.has(t)) return n;
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Notice: Unknown action type ",
              "",
            ])),
          t,
        );
      }
      return null;
    };
    function $(e) {
      return e ? ((e.primaryButton = x(e.primaryButton)), e) : null;
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = [
                e == null ? void 0 : e.icon.light,
                e == null ? void 0 : e.icon.dark,
              ],
              r = 0;
            r < ((o = e == null ? void 0 : e.bullets.length) != null ? o : 0);
            r++
          ) {
            var o,
              a = e == null ? void 0 : e.bullets[r];
            a != null && (t.push(a.icon.light), t.push(a.icon.dark));
          }
          for (
            var i = t.map(function (e) {
                return e != null
                  ? S(e)
                  : (d || (d = n("Promise"))).resolve(null);
              }),
              l = e,
              s = yield (d || (d = n("Promise"))).all(i),
              u = s[0],
              c = s[1],
              m = babelHelpers.arrayLikeToArray(s).slice(2),
              p = [],
              _ = 0;
            _ < ((f = e == null ? void 0 : e.bullets.length) != null ? f : 0);
            _++
          ) {
            var f,
              g = e == null ? void 0 : e.bullets[_];
            if (g != null) {
              var h = m[_ * 2],
                y = m[_ * 2 + 1];
              h != null && y != null
                ? p.push(
                    babelHelpers.extends({}, g, {
                      iconSvg: { light: h, dark: y },
                    }),
                  )
                : p.push(g);
            }
          }
          return (
            e &&
              u != null &&
              c != null &&
              (l = babelHelpers.extends({}, e, {
                bullets: p,
                iconSvg: { light: u, dark: c },
              })),
            l
          );
        })),
        N.apply(this, arguments)
      );
    }
    ((l.getUserDisclosureContentsQueryJob = g), (l.attemptFetch = S));
  },
  98,
);
