__d(
  "WAWebNoticeModel",
  [
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
      _ = "https://www.whatsapp.com/user-notice/v1/",
      f = (function (e) {
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
      g = "whatsapp:user-notice?action=",
      h = ["logout", "refresh"],
      y = 720 * 60 * 1e3,
      C = 2,
      b = o("WAPromiseBackoffs").createTimer({
        algo: { type: "constant", delay: y },
      }),
      v = 3600 * 1e3,
      S = 300 * 60 * 1e3,
      R = 8,
      L = o("WAPromiseBackoffs").createTimer({
        algo: { type: "fibonacci", first: 0, second: 1 },
        max: S,
      }),
      E = "zz",
      k = "ZZ",
      I = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              this.listenTo(r("WAWebL10N"), "locale_change", function () {
                e.fetchNoticeData();
              }));
          }),
          (a.delete = function () {
            (this.resetNotice(), t.prototype.delete.call(this));
          }),
          (a.sanitizeBlockingModal = function (n) {
            if (!n) return null;
            var t = function (n) {
              if (!n) return null;
              var t = n.action;
              if (t) {
                var r = h.find(function (e) {
                  return "" + g + e === t;
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
          (a.$Notice$p_1 = function (t) {
            var e = parseInt(t, 10),
              n = r("WACcToIso")[e];
            return r("WANullthrows")(n);
          }),
          (a.validateResponseFields = function (t, n) {
            t.forEach(function (e) {
              if (!(e in n))
                throw r("err")("Missing field " + e + " in notice content.");
            });
          }),
          (a.extractBlockingModal = function (t) {
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
          (a.extractBanner = function (t) {
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
          (a.extractUserNoticeContent = function (t) {
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
          (a.resetBackgroundFetches = function () {
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
          (a.resetNotice = function () {
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
          (a.fetchNoticeData = function () {
            if (o("isNonZeroNumber").isNonZeroNumber(this.noticeId)) {
              (this.resetBackgroundFetches(),
                this.set({ blockingModal: void 0, banner: void 0 }));
              var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
              if (!e) return;
              var t = o("WAPhoneFindCC").findCC(e.user),
                n = this.$Notice$p_1(t),
                a = r("WAWebURLUtils").build(_, {
                  id: this.noticeId,
                  lg: E,
                  lc: k,
                  cc: n,
                  platform: o("WAWebConnModel").Conn.isSMB ? "smbweb" : "web",
                });
              this.makeContentFetch(a);
            }
          }),
          (a.makeContentFetch = async function (t) {
            try {
              var e = await this.attemptFirstFetchAndRetriesAfter(t);
              try {
                var n = e && JSON.parse(e);
                n && this.extractUserNoticeContent(n);
              } catch (e) {
                var a = new (o(
                  "WAWebUserNoticeErrorWamEvent",
                ).UserNoticeErrorWamEvent)({
                  userNoticeId: this.noticeId,
                  userNoticeContentVersion: this.policyVersion,
                  userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                    .USER_NOTICE_ERROR_EVENT.JSON_PARSE,
                });
                throw (
                  a.commit(),
                  new f(
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
                  userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                    .USER_NOTICE_ERROR_EVENT.JSON_FETCH,
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
          }),
          (a.makeIconFetch = async function (t, n) {
            var e = this,
              a = [
                t == null ? void 0 : t.icon.light,
                t == null ? void 0 : t.icon.dark,
                n == null ? void 0 : n.icon.light,
                n == null ? void 0 : n.icon.dark,
              ],
              i = a.map(function (t) {
                return t
                  ? e.attemptFirstFetchAndRetriesAfter(t)
                  : Promise.resolve(null);
              });
            try {
              var l = await Promise.all(i),
                s = l[0],
                u = l[1],
                c = l[2],
                m = l[3],
                p = this.banner,
                _ = this.blockingModal;
              (this.banner &&
                s &&
                u &&
                (p = babelHelpers.extends({}, this.banner, {
                  iconSvg: { light: s, dark: u },
                })),
                this.blockingModal &&
                  c &&
                  m &&
                  (_ = babelHelpers.extends({}, this.blockingModal, {
                    iconSvg: { light: c, dark: m },
                  })),
                this.set({ banner: p, blockingModal: _ }));
            } catch (e) {
              var f = r("getErrorSafe")(e);
              if (f.name === o("WAAbortError").ABORT_ERROR) return;
              var g = new (o(
                "WAWebUserNoticeErrorWamEvent",
              ).UserNoticeErrorWamEvent)({
                userNoticeId: this.noticeId,
                userNoticeContentVersion: this.policyVersion,
                userNoticeErrorEvent: o("WAWebWamEnumUserNoticeErrorEvent")
                  .USER_NOTICE_ERROR_EVENT.IMAGE_FETCH,
              });
              (g.commit(),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Notice: Icon fetch error",
                      ])),
                  )
                  .catching(f)
                  .sendLogs("notice-icon-fetch-error"));
            }
          }),
          (a.shouldRetry = function (t) {
            return t === 404 || t === 429 || t >= 500;
          }),
          (a.attemptFirstFetchAndRetriesAfter = async function (t) {
            var e,
              n = new AbortController(),
              a = n.signal,
              i = (e = this.backgroundFetches) != null ? e : [];
            this.backgroundFetches = [].concat(i, [n]);
            try {
              var l = await r("WAWebPonyfillsFetch")(t, { signal: a });
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
            } catch (e) {
              if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError)
                return this.retryFetch(t, e.status);
              throw e;
            }
          }),
          (a.retryFetch = function (t, n) {
            var e,
              a = this,
              i = new AbortController(),
              l = i.signal,
              s = (e = this.backgroundFetches) != null ? e : [];
            this.backgroundFetches = [].concat(s, [i]);
            var u = async function (n) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Notice: Fetch Retry attempt",
                    ])),
                );
                var e = await r("WAWebPonyfillsFetch")(t, { signal: l });
                if (!e.ok) {
                  if (
                    (o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Notice: Could Not download",
                        ])),
                    ),
                    a.shouldRetry(e.status))
                  )
                    return n(r("err")("retryFailed"));
                  throw r("err")("contentResponseUnhandledError");
                }
                return e.text();
              },
              c,
              d;
            return (
              n === 404
                ? ((d = C),
                  (c = function (t) {
                    var e = t.taskDuration,
                      n = b();
                    return Math.max(n - e, 0);
                  }))
                : ((d = R),
                  (c = function (t) {
                    var e = t.taskDuration,
                      n = v * L();
                    return Math.max(n - e, 0);
                  })),
              o("WABackoffDelay").backoff(
                { delay: c, retries: d, signal: l },
                u,
              )
            );
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    I.Proxy = "notice";
    var T = o("WAWebBaseModel").defineModel(I),
      D = new T({ id: "default_notice_id" });
    l.default = D;
  },
  98,
);
