__d(
  "WAWebMuteModel",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWeb-moment",
    "WAWebActionToast.react",
    "WAWebAlarm",
    "WAWebBaseModel",
    "WAWebChatMuteBridge",
    "WAWebGroupMetadataCollection",
    "WAWebMiscErrors",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebNoop",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWid",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
    function T(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var D = I || (I = o("react")),
      x = -1,
      $ = "global_reactions_mute";
    function P(e, t) {
      return r("WAWebWid").isGroup(e) && !t
        ? "group"
        : r("WAWebWid").isNewsletter(e) && !t
          ? "newsletter"
          : "chat";
    }
    var N = (function (t) {
      function a() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.id = o("WAWebBaseModel").prop()),
          (e.expiration = o("WAWebBaseModel").prop(0)),
          (e.callExpiration = o("WAWebBaseModel").prop(0)),
          (e.mentionAllMuteExpiration = o("WAWebBaseModel").prop(0)),
          (e.isAutoMuted = o("WAWebBaseModel").prop(!1)),
          (e.$MuteImpl$p_1 = o("WAWebBaseModel").session()),
          (e.$MuteImpl$p_2 = o("WAWebBaseModel").session()),
          (e.promises = o("WAWebBaseModel").session(function () {
            return {
              mute: null,
              unmute: null,
              muteMentionAll: null,
              unmuteMentionAll: null,
            };
          })),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(a, t);
      var i = a.prototype;
      return (
        (i.initialize = function () {
          (t.prototype.initialize.call(this),
            this.expiration != null &&
              this.expiration !== 0 &&
              this.mute({
                expiration: this.expiration,
                isAutoMuted: this.isAutoMuted,
              }),
            this.callExpiration != null &&
              this.callExpiration !== 0 &&
              this.muteCall(this.callExpiration),
            r("WAWebWid").isGroup(this.id) &&
              this.mentionAllMuteExpiration != null &&
              this.mentionAllMuteExpiration !== 0 &&
              this.muteMentionAll(this.mentionAllMuteExpiration));
        }),
        (i.setMute = function (t, n, r) {
          (n === void 0 && (n = !1),
            !(
              ((t == null || t === 0) &&
                (this.expiration == null || this.expiration === 0)) ||
              t === this.expiration
            ) &&
              (t
                ? this.mute({ expiration: t, isAutoMuted: n, sendDevice: r })
                : this.unmute({ sendDevice: r })));
        }),
        (i.setAutoMuted = function (t) {
          this.set({ isAutoMuted: t });
        }),
        (i.mute = function (a) {
          var t = this,
            i = a.expiration,
            l = a.fromMultiselect,
            p = l === void 0 ? !1 : l,
            _ = a.isAutoMuted,
            f = _ === void 0 ? !1 : _,
            g = a.sendDevice,
            h = a.showToast,
            y = h === void 0 ? !0 : h,
            C = a.toastId,
            b = i;
          if (!o("WATypeUtils").isNumber(b))
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with invalid expiration ",
                    "",
                  ])),
                b,
              ),
              (k || (k = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          ((b = Math.round(b)),
            b > 2e9 &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:mute called with wrong units?",
                    " exp:",
                    "",
                  ])),
                this.id.toString(),
                b,
              ));
          var v = function () {
              if (
                (o("WAWebMuteGetters").getIsMuted(t) &&
                  (r("WAWebAlarm").clearTimeout(t.$MuteImpl$p_1),
                  t.unset("_unmuteTimer")),
                b === x)
              )
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "models:Mute:mute ",
                      " muted, no expiration",
                    ])),
                  t.id.toString(),
                );
              else {
                var e = b - r("WAWeb-moment")().unix();
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "models:Mute:mute ",
                      " duration:",
                      "",
                    ])),
                  t.id.toString(),
                  e,
                ),
                  (t.$MuteImpl$p_1 = r("WAWebAlarm").setGlobalTimeout(
                    function () {
                      return void t.unmute();
                    },
                    b * 1e3,
                  )));
              }
              t.set({ expiration: b, isAutoMuted: f });
            },
            S = P(this.id, p);
          if (g === !0) {
            var R;
            if (
              !r("WAWebWid").isNewsletter(this.id) &&
              this.promises.mute != null
            )
              return this.promises.mute;
            var L = r("WAWebWid").isNewsletter(this.id)
                ? (R = this.promises.mute) != null
                  ? R
                  : (k || (k = n("Promise"))).reject(
                      r("err")("No promise for newsletter mute"),
                    )
                : (this.promises.mute = o(
                    "WAWebChatMuteBridge",
                  ).sendConversationMute(
                    this.id,
                    b,
                    this.expiration,
                    r("WAWebWid").isGroup(this.id)
                      ? this.mentionAllMuteExpiration
                      : void 0,
                  )),
              E = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Muting chat"),
              );
            S === "group"
              ? (E = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Muting group"),
                ))
              : S === "newsletter" &&
                (E = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Muting channel"),
                ));
            var I = C != null ? C : o("WAWebActionToast.react").genId(),
              T = this.promises.mute
                .catch(function (e) {
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:mute dropped",
                      ])),
                  );
                  var n = s._(/*BTDS*/ "Couldn't mute chat.");
                  if (
                    (S === "group"
                      ? (n = s._(/*BTDS*/ "Couldn't mute group."))
                      : S === "newsletter" &&
                        (E = new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Couldn't mute channel"),
                        )),
                    !r("WAWebWid").isNewsletter(t.id))
                  )
                    throw new (o("WAWebActionToast.react").ActionType)(n, {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return t.mute({
                          expiration: b,
                          isAutoMuted: f,
                          sendDevice: g,
                          toastId: I,
                        });
                      },
                    });
                })
                .then(function (e) {
                  if (e.status === 200) {
                    var n = s._(/*BTDS*/ "Chat muted");
                    return (
                      S === "group"
                        ? (n = s._(/*BTDS*/ "Group muted"))
                        : S === "newsletter" &&
                          (n = s._(/*BTDS*/ "Notifications turned off")),
                      p
                        ? new (o("WAWebActionToast.react").ActionType)(n)
                        : new (o("WAWebActionToast.react").ActionType)(n, {
                            actionText: s._(/*BTDS*/ "Undo"),
                            actionHandler: function () {
                              return r("WAWebWid").isNewsletter(t.id)
                                ? o(
                                    "WAWebNewsletterUpdateUserSettingsAction",
                                  ).updateNewsletterUserSettingsAction(
                                    t.id,
                                    o("WAWebNewsletterModelUtils")
                                      .UNMUTED_STATE,
                                    [
                                      o(
                                        "WAWebNewsletterUpdateUserSettingsAction",
                                      ).NewsletterUserSetting.AdminActivity,
                                    ],
                                    {
                                      eventSurface: o(
                                        "WAWebWamEnumChannelEventSurface",
                                      ).CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                                    },
                                  )
                                : t.unmute({ sendDevice: g, toastId: I });
                            },
                          })
                    );
                  } else if (e.status >= 400)
                    throw S === "newsletter"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Failed to mute channel"),
                        )
                      : S === "group"
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't mute group."),
                          )
                        : new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't mute chat."),
                          );
                });
            return (
              y &&
                o("WAWebToastManager").ToastManager.open(
                  D.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: I,
                    initialAction: E,
                    pendingAction: T,
                  }),
                ),
              L.then(function (e) {
                e.status === 200 && v();
              }).finally(function () {
                t.promises.mute = null;
              })
            );
          }
          return (v(), (k || (k = n("Promise"))).resolve());
        }),
        (i.muteCall = function (t) {
          var e = this,
            a = t;
          if (!o("WATypeUtils").isNumber(a))
            return (
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with invalid expiration ",
                    "",
                  ])),
                a,
              ),
              (k || (k = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          if (
            ((a = Math.round(a)),
            a > 2e9 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteCall called with wrong units?",
                    " exp:",
                    "",
                  ])),
                this.id.toString(),
                a,
              ),
            o("WAWebMuteGetters").getIsCallMuted(this) &&
              (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2),
              this.unset("_unmuteCallTimer")),
            a === x)
          )
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteCall ",
                  " muted, no expiration",
                ])),
              this.id.toString(),
            );
          else {
            var i = a - r("WAWeb-moment")().unix();
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteCall ",
                  " duration:",
                  "",
                ])),
              this.id.toString(),
              i,
            ),
              (this.$MuteImpl$p_2 = r("WAWebAlarm").setGlobalTimeout(
                function () {
                  return void e.$MuteImpl$p_3();
                },
                a * 1e3,
              )));
          }
          return (
            this.set({ callExpiration: a }),
            (k || (k = n("Promise"))).resolve()
          );
        }),
        (i.canMute = function () {
          var e = !1;
          if (o("WAWebUserPrefsMeUser").isMeAccount(this.id)) return !1;
          if (r("WAWebWid").isGroup(this.id)) {
            var t = r("WAWebGroupMetadataCollection").get(this.id);
            t && (e = t.participants.iAmMember());
          }
          if (
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            r("WAWebWid").isNewsletter(this.id)
          ) {
            var n = r("WAWebNewsletterMetadataCollection").get(this.id);
            n != null && (e = n.canBeMuted);
          }
          return (
            e ||
            r("WAWebWid").isUser(this.id) ||
            r("WAWebWid").isBroadcast(this.id)
          );
        }),
        (i.$MuteImpl$p_4 = function () {
          (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_1),
            this.unset("_unmuteTimer"),
            (this.expiration = 0));
        }),
        (i.$MuteImpl$p_5 = function () {
          (r("WAWebAlarm").clearTimeout(this.$MuteImpl$p_2),
            this.unset("_unmuteCallTimer"),
            (this.callExpiration = 0));
        }),
        (i.unmute = function (t) {
          var e = this,
            a = t === void 0 ? {} : t,
            i = a.fromMultiselect,
            l = i === void 0 ? !1 : i,
            u = a.sendDevice,
            c = a.showToast,
            d = c === void 0 ? !0 : c,
            m = a.toastId,
            p = !1,
            _ = function () {
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:unmute ",
                    "",
                  ])),
                e.id.toString(),
              ),
                e.$MuteImpl$p_4(),
                e.set(
                  babelHelpers.extends(
                    { isAutoMuted: p },
                    r("WAWebWid").isGroup(e.id) && {
                      mentionAllMuteExpiration: 0,
                    },
                  ),
                ));
            },
            f = P(this.id, l);
          if (u === !0) {
            var g;
            if (!r("WAWebWid").isNewsletter(this.id) && this.promises.unmute)
              return this.promises.unmute;
            var C = r("WAWebWid").isNewsletter(this.id)
                ? (g = this.promises.unmute) != null
                  ? g
                  : (k || (k = n("Promise"))).reject(
                      r("err")("No promise for newsletter mute"),
                    )
                : (this.promises.unmute = o(
                    "WAWebChatMuteBridge",
                  ).sendConversationMute(this.id, 0, this.expiration)),
              b = new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Unmuting chat"),
              );
            f === "group"
              ? (b = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Unmuting group"),
                ))
              : f === "newsletter" &&
                (b = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Unmuting channel"),
                ));
            var v = m || o("WAWebActionToast.react").genId(),
              S = this.promises.unmute
                .catch(function (t) {
                  o("WALogger").WARN(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "models:Mute:unmute dropped",
                      ])),
                  );
                  var n = s._(/*BTDS*/ "Couldn't unmute chat.");
                  if (
                    (f === "group"
                      ? (n = s._(/*BTDS*/ "Couldn't unmute group."))
                      : f === "newsletter" &&
                        (n = s._(/*BTDS*/ "Couldn't unmute channel.")),
                    !r("WAWebWid").isNewsletter(e.id))
                  )
                    throw new (o("WAWebActionToast.react").ActionType)(n, {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return e.unmute({ sendDevice: u, toastId: v });
                      },
                    });
                })
                .then(function (t) {
                  if (t.status === 200)
                    return f === "group"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Group unmuted"),
                        )
                      : f === "newsletter"
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Notifications turned on"),
                            {
                              actionText: s._(/*BTDS*/ "Undo"),
                              actionHandler: function () {
                                return o(
                                  "WAWebNewsletterUpdateUserSettingsAction",
                                ).updateNewsletterUserSettingsAction(
                                  e.id,
                                  o("WAWebNewsletterModelUtils").MUTED_STATE,
                                  [
                                    o("WAWebNewsletterUpdateUserSettingsAction")
                                      .NewsletterUserSetting.AdminActivity,
                                  ],
                                  {
                                    eventSurface: o(
                                      "WAWebWamEnumChannelEventSurface",
                                    ).CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                                  },
                                );
                              },
                            },
                          )
                        : new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Chat unmuted"),
                          );
                  if (t.status >= 400)
                    throw f === "newsletter"
                      ? new (o("WAWebActionToast.react").ActionType)(
                          s._(/*BTDS*/ "Failed to unmute channel"),
                        )
                      : f === "group"
                        ? new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't unmute group."),
                          )
                        : new (o("WAWebActionToast.react").ActionType)(
                            s._(/*BTDS*/ "Couldn't unmute chat."),
                          );
                });
            return (
              d &&
                o("WAWebToastManager").ToastManager.open(
                  D.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: v,
                    initialAction: b,
                    pendingAction: S,
                  }),
                ),
              C.then(function (e) {
                e.status === 200 && _();
              }).finally(function () {
                e.promises.unmute = null;
              })
            );
          }
          return (_(), (k || (k = n("Promise"))).resolve());
        }),
        (i.$MuteImpl$p_3 = function () {
          return (
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:unmuteCall ",
                  "",
                ])),
              this.id.toString(),
            ),
            this.$MuteImpl$p_5(),
            (k || (k = n("Promise"))).resolve()
          );
        }),
        (i.muteMentionAll = function (t) {
          var e,
            a = this;
          if (!r("WAWebWid").isGroup(this.id))
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteMentionAll called on non-group chat ",
                    "",
                  ])),
                this.id.toString(),
              ),
              (k || (k = n("Promise"))).reject()
            );
          var i = t;
          if (!o("WATypeUtils").isNumber(i))
            return (
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteMentionAll called with invalid expiration ",
                    "",
                  ])),
                i,
              ),
              (k || (k = n("Promise"))).reject()
            );
          if (
            ((i = Math.round(i)),
            i > 2e9 &&
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "models:Mute:muteMentionAll called with wrong units?",
                    " exp:",
                    "",
                  ])),
                this.id.toString(),
                i,
              ),
            i === x)
          )
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteMentionAll ",
                  " muted, no expiration",
                ])),
              this.id.toString(),
            );
          else {
            var l = i - r("WAWeb-moment")().unix();
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:muteMentionAll ",
                  " duration:",
                  "",
                ])),
              this.id.toString(),
              l,
            );
          }
          return this.promises.muteMentionAll
            ? this.promises.muteMentionAll.then(r("WAWebNoop"))
            : ((this.promises.muteMentionAll = o(
                "WAWebChatMuteBridge",
              ).sendConversationMute(
                this.id,
                (e = this.expiration) != null ? e : 0,
                this.expiration,
                i,
              )),
              this.promises.muteMentionAll
                .then(function (e) {
                  e.status === 200 && a.set({ mentionAllMuteExpiration: i });
                })
                .finally(function () {
                  a.promises.muteMentionAll = null;
                }));
        }),
        (i.unmuteMentionAll = function () {
          var e,
            t = this;
          return (
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "models:Mute:unmuteMentionAll ",
                  "",
                ])),
              this.id.toString(),
            ),
            this.promises.unmuteMentionAll
              ? this.promises.unmuteMentionAll.then(r("WAWebNoop"))
              : ((this.promises.unmuteMentionAll = o(
                  "WAWebChatMuteBridge",
                ).sendConversationMute(
                  this.id,
                  (e = this.expiration) != null ? e : 0,
                  this.expiration,
                  0,
                )),
                this.promises.unmuteMentionAll
                  .then(function (e) {
                    e.status === 200 && t.set({ mentionAllMuteExpiration: 0 });
                  })
                  .finally(function () {
                    t.promises.unmuteMentionAll = null;
                  }))
          );
        }),
        (i.getIsMentionAllMuted = function () {
          if (
            !r("WAWebWid").isGroup(this.id) ||
            !o("WAWebMuteGetters").getIsMuted(this)
          )
            return !1;
          var e = this.mentionAllMuteExpiration;
          return e == null || e === 0
            ? !1
            : e === x
              ? !0
              : e > r("WAWeb-moment")().unix();
        }),
        (i.delete = function () {
          (t.prototype.delete.call(this),
            this.getCollection().remove(this.id),
            this.$MuteImpl$p_4(),
            o("WAWebMuteGetters").clearMuteGetterCacheFor(this));
        }),
        (i.getCollection = function () {
          return o("WAWebMuteCollection").MuteCollection;
        }),
        a
      );
    })(o("WAWebBaseModel").BaseModel);
    ((N.Proxy = "mute"), (N.idClass = r("WAWebWid")), (N.allowedIds = [$]));
    var M = o("WAWebBaseModel").defineModel(N);
    ((l.GLOBAL_REACTIONS_MUTE = $), (l.Mute = M));
  },
  226,
);
