__d(
  "WAWebNoticeModel",
  [
    "Promise",
    "WAAbortError",
    "WABackoffDelay",
    "WACcToIso",
    "WACustomError",
    "WALogger",
    "WANullthrows",
    "WAPhoneFindCC",
    "WAPromiseBackoffs",
    "WAWebBaseModel",
    "WAWebConnModel",
    "WAWebHttpErrors",
    "WAWebL10N",
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
      m,
      p,
      _,
      f = "https://www.whatsapp.com/user-notice/v1/",
      g = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t != null ? t : "") || this),
            (n.name = "NoticeJsonParseError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError),
      h = "whatsapp:user-notice?action=",
      y = ["logout", "refresh"],
      C = 720 * 60 * 1e3,
      b = 2,
      v = o("WAPromiseBackoffs").createTimer({
        algo: { type: "constant", delay: C },
      }),
      S = 3600 * 1e3,
      R = 300 * 60 * 1e3,
      L = 8,
      E = o("WAPromiseBackoffs").createTimer({
        algo: { type: "fibonacci", first: 0, second: 1 },
        max: R,
      }),
      k = "zz",
      I = "ZZ",
      T = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.noticeId = o("WAWebBaseModel").prop()),
            (e.blocking = o("WAWebBaseModel").prop()),
            (e.policyVersion = o("WAWebBaseModel").prop()),
            (e.banner = o("WAWebBaseModel").prop()),
            (e.blockingModal = o("WAWebBaseModel").prop()),
            (e.shouldShowButterBar = o("WAWebBaseModel").session(!0)),
            (e.backgroundFetches = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.listenTo(r("WAWebL10N"), "locale_change", function () {
                e.fetchNoticeData();
              }));
          }),
          (i.delete = function () {
            (this.resetNotice(), t.prototype.delete.call(this));
          }),
          (i.sanitizeBlockingModal = function (n) {
            if (!n) return null;
            var t = function (n) {
              if (!n) return null;
              var t = n.action;
              if (t) {
                var r = y.find(function (e) {
                  return "" + h + e === t;
                });
                if (r != null) return ((n.action = r), n);
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
            return (
              (n.primaryButton = t(n.primaryButton)),
              (n.secondaryButton = t(n.secondaryButton)),
              n
            );
          }),
          (i.$Notice$p_1 = function (t) {
            var e = parseInt(t, 10),
              n = r("WACcToIso")[e];
            return r("WANullthrows")(n);
          }),
          (i.validateResponseFields = function (t, n) {
            t.forEach(function (e) {
              if (!(e in n))
                throw r("err")("Missing field " + e + " in notice content.");
            });
          }),
          (i.extractBlockingModal = function (t) {
            if (t)
              return (
                this.validateResponseFields(
                  ["icon", "iconDescription", "title", "body", "primaryButton"],
                  t,
                ),
                this.validateResponseFields(["light", "dark"], t.icon),
                {
                  icon: { light: t.icon.light, dark: t.icon.dark },
                  iconSvg: { light: "", dark: "" },
                  iconDescription: t.iconDescription,
                  title: t.title,
                  body: t.body,
                  primaryButton: t.primaryButton,
                  secondaryButton: t.secondaryButton,
                }
              );
          }),
          (i.extractBanner = function (t) {
            if (t)
              return (
                this.validateResponseFields(
                  ["icon", "iconDescription", "text"],
                  t,
                ),
                this.validateResponseFields(["light", "dark"], t.icon),
                {
                  icon: { light: t.icon.light, dark: t.icon.dark },
                  iconDescription: t.iconDescription,
                  text: t.text,
                  iconSvg: { light: "", dark: "" },
                }
              );
          }),
          (i.extractUserNoticeContent = function (t) {
            var e = t.policyVersion;
            if (!e)
              throw r("err")("Missing field policyVersion in notice content.");
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Notice:fetchNoticeData successful for policyVersion ",
                  "",
                ])),
              e,
            );
            var n = t.banner && this.extractBanner(t.banner),
              a =
                t["blocking-modal"] &&
                this.extractBlockingModal(t["blocking-modal"]),
              i = a && this.sanitizeBlockingModal(a);
            (this.set({ policyVersion: e, blockingModal: i, banner: n }),
              this.makeIconFetch(n, i));
          }),
          (i.resetBackgroundFetches = function () {
            var e = this.backgroundFetches;
            e != null &&
              e.length > 0 &&
              (e.forEach(function (e) {
                e.abort();
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Notice: aborting ",
                    " fetches",
                  ])),
                e.length,
              ));
          }),
          (i.resetNotice = function () {
            (this.resetBackgroundFetches(),
              this.unset([
                "banner",
                "blocking",
                "blockingModal",
                "noticeId",
                "policyVersion",
              ]),
              (this.shouldShowButterBar = !0));
          }),
          (i.fetchNoticeData = function () {
            if (o("isNonZeroNumber").isNonZeroNumber(this.noticeId)) {
              (this.resetBackgroundFetches(),
                this.set({ blockingModal: void 0, banner: void 0 }));
              var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
              if (!e) return;
              var t = o("WAPhoneFindCC").findCC(e.user),
                n = this.$Notice$p_1(t),
                a = r("WAWebURLUtils").build(f, {
                  id: this.noticeId,
                  lg: k,
                  lc: I,
                  cc: n,
                  platform: o("WAWebConnModel").Conn.isSMB ? "smbweb" : "web",
                });
              this.makeContentFetch(a);
            }
          }),
          (i.makeContentFetch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                try {
                  var t = yield this.attemptFirstFetchAndRetriesAfter(e);
                  try {
                    var n = t && JSON.parse(t);
                    n && this.extractUserNoticeContent(n);
                  } catch (e) {
                    var a = new (o(
                      "WAWebUserNoticeErrorWamEvent",
                    ).UserNoticeErrorWamEvent)({
                      userNoticeId: this.noticeId,
                      userNoticeContentVersion: this.policyVersion,
                      userNoticeErrorEvent: o(
                        "WAWebWamEnumUserNoticeErrorEvent",
                      ).USER_NOTICE_ERROR_EVENT.JSON_PARSE,
                    });
                    throw (
                      a.commit(),
                      new g(
                        "Received invalid User Notice content for id " +
                          this.noticeId,
                      )
                    );
                  }
                } catch (e) {
                  var i = r("getErrorSafe")(e);
                  if (i.name === o("WAAbortError").ABORT_ERROR) return;
                  if (i.name !== "NoticeJsonParseError") {
                    var l = new (o(
                      "WAWebUserNoticeErrorWamEvent",
                    ).UserNoticeErrorWamEvent)({
                      userNoticeId: this.noticeId,
                      userNoticeContentVersion: this.policyVersion,
                      userNoticeErrorEvent: o(
                        "WAWebWamEnumUserNoticeErrorEvent",
                      ).USER_NOTICE_ERROR_EVENT.JSON_FETCH,
                    });
                    l.commit();
                  }
                  (this.resetNotice(),
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Notice: Error Message",
                          ])),
                      )
                      .catching(i)
                      .sendLogs("notice-content-error"));
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.makeIconFetch = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this,
                  i = [
                    e == null ? void 0 : e.icon.light,
                    e == null ? void 0 : e.icon.dark,
                    t == null ? void 0 : t.icon.light,
                    t == null ? void 0 : t.icon.dark,
                  ],
                  l = i.map(function (e) {
                    return e
                      ? a.attemptFirstFetchAndRetriesAfter(e)
                      : (_ || (_ = n("Promise"))).resolve(null);
                  });
                try {
                  var s = yield (_ || (_ = n("Promise"))).all(l),
                    u = s[0],
                    c = s[1],
                    m = s[2],
                    p = s[3],
                    f = this.banner,
                    g = this.blockingModal;
                  (this.banner &&
                    u &&
                    c &&
                    (f = babelHelpers.extends({}, this.banner, {
                      iconSvg: { light: u, dark: c },
                    })),
                    this.blockingModal &&
                      m &&
                      p &&
                      (g = babelHelpers.extends({}, this.blockingModal, {
                        iconSvg: { light: m, dark: p },
                      })),
                    this.set({ banner: f, blockingModal: g }));
                } catch (e) {
                  var h = r("getErrorSafe")(e);
                  if (h.name === o("WAAbortError").ABORT_ERROR) return;
                  var y = new (o(
                    "WAWebUserNoticeErrorWamEvent",
                  ).UserNoticeErrorWamEvent)({
                    userNoticeId: this.noticeId,
                    userNoticeContentVersion: this.policyVersion,
                    userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                      .USER_NOTICE_ERROR_EVENT.IMAGE_FETCH,
                  });
                  (y.commit(),
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Notice: Icon fetch error",
                          ])),
                      )
                      .catching(h)
                      .sendLogs("notice-icon-fetch-error"));
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.shouldRetry = function (t) {
            return t === 404 || t === 429 || t >= 500;
          }),
          (i.attemptFirstFetchAndRetriesAfter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t,
                  n = new AbortController(),
                  a = n.signal,
                  i = (t = this.backgroundFetches) != null ? t : [];
                this.backgroundFetches = [].concat(i, [n]);
                try {
                  var l = yield r("WAWebPonyfillsFetch")(e, { signal: a });
                  if (!l.ok) {
                    var s = l.status;
                    throw this.shouldRetry(s)
                      ? new (o("WAWebHttpErrors").HttpStatusCodeError)(
                          s,
                          "noticeFetchErr",
                        )
                      : r("err")("contentResponseUnhandledError");
                  }
                  return l.text();
                } catch (t) {
                  if (t instanceof o("WAWebHttpErrors").HttpStatusCodeError)
                    return this.retryFetch(e, t.status);
                  throw t;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.retryFetch = function (t, a) {
            var e,
              i = this,
              l = new AbortController(),
              s = l.signal,
              u = (e = this.backgroundFetches) != null ? e : [];
            this.backgroundFetches = [].concat(u, [l]);
            var c = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Notice: Fetch Retry attempt",
                        ])),
                    );
                    var n = yield r("WAWebPonyfillsFetch")(t, { signal: s });
                    if (!n.ok) {
                      if (
                        (o("WALogger").WARN(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "Notice: Could Not download",
                            ])),
                        ),
                        i.shouldRetry(n.status))
                      )
                        return e(r("err")("retryFailed"));
                      throw r("err")("contentResponseUnhandledError");
                    }
                    return n.text();
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              d,
              _;
            return (
              a === 404
                ? ((_ = b),
                  (d = function (t) {
                    var e = t.taskDuration,
                      n = v();
                    return Math.max(n - e, 0);
                  }))
                : ((_ = L),
                  (d = function (t) {
                    var e = t.taskDuration,
                      n = S * E();
                    return Math.max(n - e, 0);
                  })),
              o("WABackoffDelay").backoff(
                { delay: d, retries: _, signal: s },
                c,
              )
            );
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    T.Proxy = "notice";
    var D = o("WAWebBaseModel").defineModel(T),
      x = new D({ id: "default_notice_id" });
    l.default = x;
  },
  98,
);
