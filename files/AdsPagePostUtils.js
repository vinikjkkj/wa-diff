__d(
  "AdsPagePostUtils",
  [
    "errorCode",
    "errorDesc",
    "fbt",
    "invariant",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsAudioSwapModalConstants",
    "AdsBuyingTypes",
    "AdsError",
    "AdsExistingPostCTAUtils",
    "AdsFacebookReelErrorUtils",
    "AdsGraphAPI",
    "AdsInstagramBrandedContentUtils",
    "AdsInterfacesLogger",
    "AdsInterfacesLoggerUtils",
    "AdsLoadState_LEGACY",
    "AdsPagePostIDUtils",
    "AdsPromotedObjectTypes",
    "AdsSesameEligibilityUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsUseExistingPostModalConstants",
    "ApiAdObjectTypes",
    "BrandedContentAdsUtils",
    "ClickToMessageCTXMDFeatureGating",
    "FBLogger",
    "LiveVideoPostUtil",
    "err",
    "gkx",
    "isFalsey",
    "isTruthy",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l, s, u, c, d) {
    "use strict";
    function e(e, t) {
      return (
        (e === r("AdsAPIObjectives").LINK_CLICKS ||
          e === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
        t === r("AdsPromotedObjectTypes").MOBILE_APP &&
        r("gkx")("7662")
      );
    }
    var m = (function () {
      var e = 0;
      return function () {
        return e++;
      };
    })();
    function p(e) {
      return r("isFalsey")(e) || e === r("AdsLoadState_LEGACY").LOADING
        ? null
        : e;
    }
    var _ = [2016093, 2016111, 2016148, 2016147, 3858146, 2016149],
      f = 1815390;
    function g(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
      (l === void 0 && (l = !1),
        c === void 0 && (c = !1),
        d === void 0 && (d = !1),
        m === void 0 && (m = !0),
        p === void 0 && (p = null));
      var _ = [],
        f = e.postSource !== "upac_post";
      return (
        v(e, t, _),
        f && (S(e, n, t, i, _), R(e, a, _, m), L(e, a, _, m), E(e, a, i, _)),
        k(e.type, _),
        I(e, l, _),
        f && T(e, t, s, l, _),
        D(e, o, _),
        x(e, t, _, c),
        $(e, _),
        f && (P(e, t, _), N(e, s, _)),
        M(e, s, _),
        w(e.call_to_action, t, u, _, s, p),
        d && (C(e, _), b(e, _)),
        _
      );
    }
    function h(e) {
      return e.filter(function (e) {
        return !_.includes(Number(e.key));
      });
    }
    function y(e) {
      return e.filter(function (e) {
        return Number(e.key) !== f;
      });
    }
    var C = function (t, n) {
        if ((t == null ? void 0 : t.partnership_ads_identities) == null) {
          var e = (t == null ? void 0 : t.has_audio_swapped_fb_copy) === !0;
          o("AdsFacebookReelErrorUtils").isFBReelWithCopyrightMusic(t) &&
            !e &&
            n.push(
              new (r("AdsError"))(
                2446979,
                o(
                  "AdsAudioSwapModalConstants",
                ).AUDIO_SWAP_MODAL_CONSTANTS.DISABLED_AUDIO_DESCRIPTION.toString(),
                { level: r("AdsError").Level.RECOMMEND },
              ),
            );
        }
      },
      b = function (t, n) {
        if ((t == null ? void 0 : t.partnership_ads_identities) == null) {
          var e = (t == null ? void 0 : t.has_audio_swapped_fb_copy) === !0;
          ((o("AdsFacebookReelErrorUtils").isFBReelWithCopyrightMusic(t) &&
            e) ||
            o("AdsFacebookReelErrorUtils").isFBAudioSwappedCopy(t)) &&
            n.push(
              new (r("AdsError"))(
                2446979,
                o(
                  "AdsAudioSwapModalConstants",
                ).AUDIO_SWAP_MODAL_CONSTANTS.AUDIO_ALREADY_SWAPPED_DESCRIPTION.toString(),
                { level: r("AdsError").Level.RECOMMEND },
              ),
            );
        }
      },
      v = function (t, n, o) {
        !_e(t) &&
          n === r("AdsAPIObjectives").VIDEO_VIEWS &&
          o.push(
            new (r("AdsError"))(
              2016092,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      S = function (t, n, o, a, i) {
        if (
          !B(t, n) &&
          (o === r("AdsAPIObjectives").LINK_CLICKS ||
            o === r("AdsAPIObjectives").CONVERSIONS)
        ) {
          var e,
            l,
            s =
              (e = (l = t.call_to_action) == null ? void 0 : l.type) != null
                ? e
                : "NO_BUTTON";
          s === "NO_BUTTON" &&
            (a !== !0
              ? i.push(
                  new (r("AdsError"))(
                    2016093,
                    u._(function (e, t) {
                      return e._(/*BTDS*/ "");
                    }, {}),
                    { level: r("AdsError").Level.RECOMMEND },
                  ),
                )
              : i.push(
                  new (r("AdsError"))(
                    2016111,
                    u._(function (e, t) {
                      return e._(/*BTDS*/ "");
                    }, {}),
                    { level: r("AdsError").Level.RECOMMEND },
                  ),
                ));
        }
      },
      R = function (t, n, a, i) {
        var e, l, s;
        if (
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(n)
        ) {
          var c = H(t),
            d = z(t),
            m = j(t),
            p = K(t),
            _ =
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isMultiDestinationWithWhatsApp(n) && d,
            f =
              (e =
                (l = t.attachments) == null || (l = l.data[0]) == null
                  ? void 0
                  : l.type) != null
                ? e
                : "",
            g = (s = t.status_type) != null ? s : "",
            h = o(
              "AdsExistingPostCTAUtils",
            ).hasSupportedPostAttachmentTypeForMessagesObjective(f, g);
          if (
            (n === r("AdCampaignDestination").MESSENGER ||
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isMultiDestinationWithMessenger(n)) &&
            !c &&
            !_
          )
            if (h) {
              if (
                !(
                  p &&
                  (i || U(t, "MESSAGE_PAGE")) &&
                  o(
                    "ClickToMessageCTXMDFeatureGating",
                  ).isCTXPostCTARelaxationEnabled()
                )
              ) {
                var C = new (r("AdsError"))(
                  2016098,
                  u._(function (e, t) {
                    return e._(/*BTDS*/ "");
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                );
                a.push(C);
              }
            } else {
              var y = new (r("AdsError"))(
                2016144,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
                { level: r("AdsError").Level.WARN },
              );
              a.push(y);
            }
          if (
            (n === r("AdCampaignDestination").WHATSAPP ||
              n ===
                r("AdCampaignDestination")
                  .MESSAGING_INSTAGRAM_DIRECT_WHATSAPP) &&
            !(
              d ||
              (p &&
                (i || U(t, "WHATSAPP_MESSAGE")) &&
                o(
                  "ClickToMessageCTXMDFeatureGating",
                ).isCTXPostCTARelaxationEnabled())
            )
          ) {
            var b = new (r("AdsError"))(
              2016101,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            a.push(b);
          }
          if (
            n === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
            !(
              m ||
              (p &&
                (i || U(t, "INSTAGRAM_MESSAGE")) &&
                o(
                  "ClickToMessageCTXMDFeatureGating",
                ).isCTXPostCTARelaxationEnabled())
            )
          ) {
            var v = new (r("AdsError"))(
              2016113,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            a.push(v);
          }
        }
      },
      L = function (t, n, a, i) {
        if (
          n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          !(
            j(t) ||
            (K(t) &&
              (i || U(t, "INSTAGRAM_MESSAGE")) &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCTXPostCTARelaxationEnabled())
          )
        ) {
          var e = new (r("AdsError"))(
            2016113,
            u._(function (e, t) {
              return e._(/*BTDS*/ "");
            }, {}),
            { level: r("AdsError").Level.WARN },
          );
          a.push(e);
        }
      },
      E = function (t, n, a, i) {
        if (
          o(
            "AdsUnifiedProfileVisitUtils",
          ).getUnifiedProfileVisitsDestinationContainsFB(n)
        )
          if (Ge(t.attachments)) {
            if (!He(t.call_to_action)) {
              var l =
                a === !0
                  ? new (r("AdsError"))(
                      2016148,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    )
                  : new (r("AdsError"))(
                      2016147,
                      u._(function (e, t) {
                        return e._(/*BTDS*/ "");
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    );
              i.push(l);
            }
          } else {
            var e = new (r("AdsError"))(
              3858463,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            i.push(e);
          }
      },
      k = function (t, n) {
        t === "event" &&
          n.push(
            new (r("AdsError"))(
              2016094,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      I = function (t, n, o) {
        if (n && t.has_sponsors_with_boost_permission === !1) {
          var e;
          o.push(
            new (r("AdsError"))(
              1946076,
              u._(
                function (e, t) {
                  return e._(/*BTDS*/ "", [
                    e._param("postCreator", t.postCreator),
                  ]);
                },
                { postCreator: (e = t.from) == null ? void 0 : e.name },
              ),
              { level: r("AdsError").Level.RECOMMEND },
            ),
          );
        }
      },
      T = function (n, o, a, i, l) {
        var t = r("AdsAppUtils").isAppEngagementObjective(o, a);
        if (o === r("AdsAPIObjectives").APP_INSTALLS || t || e(o, a))
          if (r("isFalsey")(n.is_published))
            l.push(
              new (r("AdsError"))(
                2016110,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
                { level: r("AdsError").Level.WARN },
              ),
            );
          else {
            var s = o === r("AdsAPIObjectives").APP_INSTALLS && !Q(n),
              c = t && !X(n, i);
            (c || s) &&
              l.push(
                new (r("AdsError"))(
                  2016031,
                  u._(
                    function (e, t) {
                      return e._(/*BTDS*/ "", [
                        e._param("mediaType", t.mediaType),
                      ]);
                    },
                    { mediaType: n.type },
                  ),
                  { level: r("AdsError").Level.WARN },
                ),
              );
          }
      },
      D = function (t, n, o) {
        n === r("AdsBuyingTypes").RESERVED &&
          Y(t) &&
          o.push(
            new (r("AdsError"))(
              1885605,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      x = function (t, n, o, a) {
        a ||
          (!_e(t) &&
            n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            o.push(
              new (r("AdsError"))(
                3167001,
                u._(function (e, t) {
                  return e._(/*BTDS*/ "");
                }, {}),
                { level: r("AdsError").Level.WARN },
              ),
            ));
      },
      $ = function (t, n) {
        if (
          r("justknobx")._("3382") &&
          pe(t) &&
          (t == null ? void 0 : t.is_fb_live_videos) === !0 &&
          [
            "INELIGIBLE_LIVE_VIDEO_BOOSTING",
            "INELIGIBLE_LIVE_VIDEO_BOOSTING_PAGE",
          ].some(function (e) {
            var n;
            return t == null || (n = t.live_video_eligibility) == null
              ? void 0
              : n.includes(e);
          })
        ) {
          var e;
          n.push(
            t != null &&
              (e = t.live_video_eligibility) != null &&
              e.includes("INELIGIBLE_LIVE_VIDEO_BOOSTING")
              ? new (r("AdsError"))(3858491, c._(/*BTDS*/ ""), {
                  helpCenterID: "615810221411530",
                  level: r("AdsError").Level.WARN,
                })
              : new (r("AdsError"))(3858490, c._(/*BTDS*/ ""), {
                  helpCenterID: "615810221411530",
                  level: r("AdsError").Level.WARN,
                }),
          );
        }
        o("LiveVideoPostUtil").isLiveVideoAndEligibleForUsabilityFix(t) &&
          n.push(
            new (r("AdsError"))(3858491, c._(/*BTDS*/ ""), {
              level: r("AdsError").Level.SUCCESS,
            }),
          );
      },
      P = function (t, n, o) {
        if (pe(t) && n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) {
          var e = t == null ? void 0 : t.live_video_eligibility;
          e
            ? e.includes("INELIGIBLE_NOT_LIVE_VIDEO") &&
              o.push(
                new (r("AdsError"))(
                  3167001,
                  u._(function (e, t) {
                    return e._(/*BTDS*/ "");
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                ),
              )
            : o.push(
                new (r("AdsError"))(
                  3198001,
                  u._(function (e, t) {
                    return e._(/*BTDS*/ "");
                  }, {}),
                  { level: r("AdsError").Level.RECOMMEND },
                ),
              );
        }
      },
      N = function (t, n, o) {
        n === r("AdsPromotedObjectTypes").PHONE_CALL &&
          !G(t) &&
          o.push(
            new (r("AdsError"))(
              3858146,
              u._(function (e, t) {
                return e._(/*BTDS*/ "");
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      M = function (t, n, o) {
        if (n === r("AdsPromotedObjectTypes").ON_AD) {
          var e,
            a,
            i,
            l = ["photo", "video"],
            s =
              ((e = t.attachments) == null || (e = e.data[0]) == null
                ? void 0
                : e.type) === "profile_media",
            c = t.type;
          (s ||
            (!l.includes(c) && !(t.type === "album" && r("gkx")("16451")))) &&
            o.push(
              new (r("AdsError"))(
                2016031,
                u._(
                  function (e, t) {
                    return e._(/*BTDS*/ "", [
                      e._param("mediaType", t.mediaType),
                    ]);
                  },
                  { mediaType: s ? "profile picture" : c },
                ),
                { level: r("AdsError").Level.WARN },
              ),
            );
          var d = [
              "SUBSCRIBE",
              "APPLY_NOW",
              "BOOK_TRAVEL",
              "DOWNLOAD",
              "GET_OFFER",
              "GET_QUOTE",
              "LEARN_MORE",
              "SEE_DETAILS",
              "SIGN_UP",
              "NO_BUTTON",
            ],
            m =
              (a = (i = t.call_to_action) == null ? void 0 : i.type) != null
                ? a
                : "NO_BUTTON";
          d.includes(m) ||
            o.push(
              new (r("AdsError"))(
                2016036,
                u._(
                  function (e, t) {
                    return e._(/*BTDS*/ "", [e._param("ctaType", t.ctaType)]);
                  },
                  { ctaType: m },
                ),
                { level: r("AdsError").Level.WARN },
              ),
            );
        }
      },
      w = function (n, o, a, i, l, s) {
        var t, c;
        (l === void 0 && (l = null), s === void 0 && (s = null));
        var d = e(o, l);
        if (
          !(o !== r("AdsAPIObjectives").APP_INSTALLS && !d) &&
          !(!d && !r("gkx")("5824"))
        ) {
          var m = (t = n == null ? void 0 : n.type) != null ? t : "NO_BUTTON";
          if (m !== "NO_BUTTON") {
            var p = (c = n == null ? void 0 : n.value.link) != null ? c : "",
              _ = r("AdsAppUrlUtils").removeReferrerTag(p);
            if (d) {
              var f = [].concat(s != null ? s : [], a != null ? [a] : []);
              f.length > 0 &&
                _ !== "" &&
                r("AdsAppUrlUtils").isAppStoreURL(_) &&
                !f.some(function (e) {
                  return r("AdsAppUrlUtils").removeReferrerTag(e) === _;
                }) &&
                i.push(
                  new (r("AdsError"))(
                    2016149,
                    u._(function (e, t) {
                      return e._(/*BTDS*/ "");
                    }, {}),
                    { level: r("AdsError").Level.WARN },
                  ),
                );
              return;
            }
            _ !== r("AdsAppUrlUtils").removeReferrerTag(a) &&
              i.push(
                new (r("AdsError"))(
                  2016149,
                  u._(function (e, t) {
                    return e._(/*BTDS*/ "");
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                ),
              );
          }
        }
      };
    function A(e, t, n, r, o, a, i, l) {
      return (
        l === void 0 && (l = !1),
        g(e, t, n, r, o, a, null, !1, i, null, l).length === 0
      );
    }
    function F(e, t) {
      return t !== "offer" && t !== "status";
    }
    function O(e, t, n) {
      return e === r("AdsAPIObjectives").VIDEO_VIEWS && t.type !== "video"
        ? !1
        : r("isTruthy")(t.has_sponsors) &&
            n ===
              o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
                .PARTNER_CONTENT &&
            r("isTruthy")(t.is_story)
          ? o(
              "AdsInstagramBrandedContentUtils",
            ).isValidIgBrandedContentStoryObjective(e)
          : !0;
    }
    function B(e, t) {
      var n, o;
      return (
        e.type !== "offer" &&
        !(
          e.type === "photo" && t === r("AdsAPIOptimizationGoals").LINK_CLICKS
        ) &&
        (r("isTruthy")(e.link) ||
          ((n = (o = e.entities) == null ? void 0 : o.links.length) != null
            ? n
            : 0) > 0)
      );
    }
    function W(e, t, n) {
      var r, a, i, l, s, u, c;
      n === void 0 && (n = !1);
      var d =
          (r = (a = e.call_to_action) == null ? void 0 : a.type) != null
            ? r
            : "NO_BUTTON",
        m =
          n &&
          ue(e) &&
          (i = (l = e.attachment_call_to_action) == null ? void 0 : l.type) !=
            null
            ? i
            : null,
        p = m != null && m !== d ? m : d,
        _ = t.includes(p),
        f =
          (s =
            (u = e.attachments) == null || (u = u.data[0]) == null
              ? void 0
              : u.type) != null
            ? s
            : "",
        g = (c = e.status_type) != null ? c : "",
        h = o(
          "AdsExistingPostCTAUtils",
        ).hasSupportedPostAttachmentTypeForMessagesObjective(f, g);
      return _ && (h || se(e));
    }
    function q(e, t) {
      var n = e == null ? void 0 : e.value.app_destination;
      return n != null && t.includes(n);
    }
    function U(e, t) {
      var n;
      return (
        ue(e) &&
        ((n = e.attachment_call_to_action) == null ? void 0 : n.type) === t
      );
    }
    function V(e, t) {
      var n = W(e, t),
        r = W(e, t, !0);
      return n !== r &&
        o("ClickToMessageCTXMDFeatureGating").isFBPostPhantomCTAFixEnabled()
        ? r
        : n;
    }
    function H(e) {
      var t = ["MESSAGE_PAGE", "NO_BUTTON"],
        n = ["MESSENGER"],
        r = V(e, t),
        o = q(e.call_to_action, n);
      return r || o;
    }
    function G(e) {
      var t = ["CALL_NOW", "NO_BUTTON"];
      return W(e, t);
    }
    function z(e) {
      var t = ["WHATSAPP_MESSAGE", "NO_BUTTON"];
      return V(e, t);
    }
    function j(e) {
      var t = ["INSTAGRAM_MESSAGE", "NO_BUTTON"];
      return V(e, t);
    }
    function K(e) {
      var t = ["WHATSAPP_MESSAGE", "MESSAGE_PAGE", "INSTAGRAM_MESSAGE"];
      return W(e, t, !0);
    }
    function Q(e) {
      var t,
        n = r("gkx")("22335"),
        o = (t = e.app_installs_eligibility) != null ? t : !1,
        a = se(e) && e.type === "photo";
      return (n ? o && e.type !== "status" : o) || a;
    }
    function X(e, t) {
      var n,
        r = (n = e.app_engagement_eligibility) != null ? n : !1,
        o = se(e),
        a = o && e.type === "photo";
      return t && r && o && e.type !== "photo" ? !0 : r || a;
    }
    function Y(e) {
      var t = ["MESSAGE_PAGE", "WHATSAPP_MESSAGE"];
      return W(e, t);
    }
    function J(e) {
      return e === "APP_INSTALLS" || e === "OUTCOME_APP_PROMOTION";
    }
    function Z(e) {
      return (
        e === void 0 && (e = !0),
        e ? r("gkx")("5260") : r("gkx")("11851")
      );
    }
    function ee(e, t, n) {
      return (
        n === void 0 && (n = !0),
        o("AdsSesameEligibilityUtils").isSesamePartnershipAdPost(e) ||
          (t && !r("justknobx")._("8376") && Z(n))
      );
    }
    function te(e, t, n, r) {
      var o;
      r === void 0 && (r = !1);
      var a =
        (o = e == null ? void 0 : e.is_eligible_for_dark_post) != null ? o : !1;
      return !a || ae(e) ? !1 : ie(n, t, ee(e, r, n));
    }
    function ne(e) {
      return o("AdsSesameEligibilityUtils").isSesameExcludedDestination(e)
        ? !1
        : r("gkx")("12335");
    }
    function re(e, t, n) {
      var r,
        o,
        a =
          ((r = e == null ? void 0 : e.is_fb_live_videos) != null ? r : !1) ||
          ((o = e == null ? void 0 : e.was_fb_live_videos) != null ? o : !1);
      return !a || !J(n) || ae(e) ? !1 : ne(t);
    }
    function oe(e, t, n) {
      return !e || !J(n) ? !1 : ne(t);
    }
    function ae(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.is_owner_promode) != null ? t : !1;
      if (n) return !0;
      var r = e.story_tags;
      if (!Array.isArray(r) || r.length === 0) return !1;
      var o = r[0],
        a = o == null ? void 0 : o.type;
      return a === "user";
    }
    function ie(e, t, n) {
      var a;
      n === void 0 && (n = !1);
      var i = e === !1 ? r("gkx")("17231") : r("gkx")("17904");
      if (i) return !0;
      if (o("AdsSesameEligibilityUtils").isSesameExcludedDestination(t, n))
        return !1;
      if (e === !1) {
        var l;
        return (l = r("qex")._("1264")) != null ? l : !1;
      }
      return (a = r("qex")._("200")) != null ? a : !1;
    }
    function le(e) {
      var t = p(o("AdsPagePostIDUtils").getPageIdFromPagePostId_BROKEN(e)),
        n = p(o("AdsPagePostIDUtils").getPostIdFromPagePostId_BROKEN(e));
      return !r("isFalsey")(t) && !!n;
    }
    function se(e) {
      return e.postSource === "tofu_row"
        ? e.has_sponsors === !0
        : !!e.sponsor_tags;
    }
    function ue(e) {
      return e.type === "video";
    }
    function ce(e) {
      var t,
        n = e.call_to_action,
        r = e.attachment_call_to_action,
        a = (t = n == null ? void 0 : n.type) != null ? t : "NO_BUTTON",
        i = r == null ? void 0 : r.type;
      return i != null &&
        i !== a &&
        ue(e) &&
        o("ClickToMessageCTXMDFeatureGating").isFBPostPhantomCTAFixEnabled()
        ? r
        : n;
    }
    function de(e) {
      var t, n;
      return (t = (n = ce(e)) == null ? void 0 : n.type) != null
        ? t
        : "NO_BUTTON";
    }
    function me(e) {
      if (
        e.attachments &&
        e.attachments.data &&
        e.attachments.data.length > 0 &&
        e.attachments.data[0].target
      )
        return e.attachments.data[0].target.id;
    }
    function pe(e) {
      return (
        ue(e) && ((e.object_id != null && e.object_id !== "") || me(e) != null)
      );
    }
    function _e(e) {
      return e.postSource === "upac_post" ? ue(e) : pe(e);
    }
    function fe(e) {
      if (!pe(e)) return null;
      var t = e.object_id;
      return t != null && t !== "" ? t : me(e);
    }
    function ge(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .objects("page", e)
        .get({ fields: ["access_token"] })
        .then(function (e) {
          return new Map(
            Object.keys(e).map(function (t) {
              return [t, e[t].access_token];
            }),
          );
        });
    }
    function he(e) {
      switch (e) {
        case "event":
          return r("ApiAdObjectTypes").EVENT;
        case "link":
          return r("ApiAdObjectTypes").SHARE;
        case "offer":
          return r("ApiAdObjectTypes").OFFER;
        case "photo":
          return r("ApiAdObjectTypes").PHOTO;
        case "status":
          return r("ApiAdObjectTypes").STATUS;
        case "video":
          return r("ApiAdObjectTypes").VIDEO;
        default:
          return r("ApiAdObjectTypes").SHARE;
      }
    }
    function ye(e) {
      switch (e) {
        case "album":
          return c._(/*BTDS*/ "");
        case "carousel":
          return c._(/*BTDS*/ "");
        case "checkin":
          return c._(/*BTDS*/ "");
        case "multiple":
          return c._(/*BTDS*/ "");
        case "music":
          return c._(/*BTDS*/ "");
        case "event":
          return c._(/*BTDS*/ "");
        case "link":
          return c._(/*BTDS*/ "");
        case "offer":
          return c._(/*BTDS*/ "");
        case "note":
          return c._(/*BTDS*/ "");
        case "photo":
          return c._(/*BTDS*/ "");
        case "status":
          return c._(/*BTDS*/ "");
        case "video":
          return c._(/*BTDS*/ "");
        default:
          return (
            r("FBLogger")("ads").mustfix(
              "%s is not a valid post type. Check why this is being passed in as a promotable post in the Existing Post Modal in AM.",
              e,
            ),
            e.charAt(0).toUpperCase() + e.slice(1)
          );
      }
    }
    function Ce(e, t) {
      var n = e + "_" + t;
      return (
        (t === "" || t.endsWith(" ")) &&
          o("AdsInterfacesLoggerUtils").logException(
            r("err")(
              "generatePagePostId_BROKEN called with invalid postID: '" +
                n +
                "'",
            ),
          ),
        n
      );
    }
    function be(e, t, n) {
      return r("isTruthy")(e)
        ? e
        : r("isTruthy")(n) && r("isTruthy")(t) && Z()
          ? Ce(t, n)
          : e;
    }
    function ve(e) {
      return o("AdsPagePostIDUtils").isPagePostId_BROKEN(e)
        ? o("AdsPagePostIDUtils").getPostIdFromPagePostId_BROKEN(e)
        : e;
    }
    function Se(e, t) {
      e != null || d(0, 11831, e);
      var n = ke(t);
      return (n != null || d(0, 11832, n), "/" + e + "/posts/" + n);
    }
    function Re(e, t, n) {
      var r = ke(e);
      r != null || d(0, 11832, r);
      var o = "/" + r;
      return (t && (o = o + "?dco_ad_id=" + n), o);
    }
    function Le(e, t, n, r) {
      var o = Se(e, t),
        a = Ee(n, r);
      return o + a;
    }
    function Ee(e, t) {
      var n = "?dco_ad_id=" + e,
        r = t != null ? "&dco_ad_token=" + t : "";
      return n + r;
    }
    function ke(e) {
      var t = o("AdsPagePostIDUtils").normalizePagePostID(e);
      if (t == null) return null;
      var n = t.split("_");
      return n.length > 2 ? null : n.pop();
    }
    function Ie(e, t) {
      return e ===
        o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE.PARTNER_CONTENT &&
        (t == null ? void 0 : t.is_instagram_post) === !0 &&
        (t == null ? void 0 : t.has_product_tags) === !0
        ? "BCWPT"
        : "";
    }
    function Te(e) {
      return e == null
        ? ""
        : (r("isTruthy")(e.is_instagram_post) ? "IG" : "FB") +
            " " +
            (r("isTruthy")(e.is_story) ? "Stories" : "Feed");
    }
    function De(e, t, n, a, i, l, s, u, c, d, m, p, _, f) {
      var g,
        h = {
          isBCWithProductTags: Ie(t, n),
          isBrandedContentPost:
            n != null
              ? o("BrandedContentAdsUtils").isBrandedContentPost(n)
              : null,
          isCollabPost:
            n != null
              ? o("BrandedContentAdsUtils").isCollabPost(n.coauthor_producers)
              : null,
          isPartnershipAdsToggleOn: l,
          brandedContentBoostingType: s,
        },
        y = Ae({
          isMultipleMentionsPostSelected: p,
          isPartnerIdentitySelectedInPostPicker: c,
          isPartnershipAdsFirstIdentitySelected: d,
          isPartnershipAdsSecondIdentitySelected: m,
          isPartnershipAdsToggleOn: l,
          isSuggestedPostSelected: o("BrandedContentAdsUtils").isSuggestedPost(
            n,
          ),
        });
      r("AdsInterfacesLogger").log({
        data:
          ((g = {}),
          (g.sub_session_id = e),
          (g.custom_event_type = t),
          (g.source = Te(n)),
          (g.campaign_destination_type = a),
          (g.objective = i),
          (g.media_format = n == null ? "" : n.type),
          (g.adgroup_id = u != null ? u.id : null),
          (g.message = JSON.stringify(h)),
          (g.prior_data = JSON.stringify(Object.fromEntries(y))),
          (g.subsequent_data = JSON.stringify({
            sort_index: _ != null ? _ : null,
            view_type: f != null ? f : null,
          })),
          g),
        eventName: "post_selector_select_post_confirm_click",
        eventCategory: "user_action",
      });
    }
    function xe(e, t, n, o, a) {
      var i,
        l = Ae({
          isPartnershipAdsToggleOn: n,
          isPartnershipAdsFirstIdentitySelected: o,
          isPartnershipAdsSecondIdentitySelected: a,
        });
      r("AdsInterfacesLogger").log({
        data:
          ((i = {}),
          (i.sub_session_id = e),
          (i.prior_data = JSON.stringify(Object.fromEntries(l))),
          (i.adgroup_id = t != null ? t : null),
          i),
        eventName: "post_selector_select_post_click",
        eventCategory: "user_action",
      });
    }
    function $e() {
      r("AdsInterfacesLogger").log({
        eventName: "create_new_page_post_click",
        eventCategory: "user_action",
      });
    }
    function Pe(e, t, n) {}
    function Ne() {
      r("AdsInterfacesLogger").log({
        eventName: "post_modal_search_by_enter",
        eventCategory: "user_action",
      });
    }
    function Me(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g) {
      var h, y, C;
      (m === void 0 && (m = "select_post_table_row"), p === void 0 && (p = !1));
      var b = {
          isBCWithProductTags: Ie(t, n),
          isBrandedContentPost:
            n != null
              ? o("BrandedContentAdsUtils").isBrandedContentPost(n)
              : null,
          isCollabPost:
            n != null
              ? o("BrandedContentAdsUtils").isCollabPost(n.coauthor_producers)
              : null,
        },
        v = o("BrandedContentAdsUtils").isSuggestedPost(n),
        S = Ae({
          isMultipleMentionsPostSelected: c,
          isPartnerIdentitySelectedInPostPicker: l,
          isPartnershipAdsFirstIdentitySelected: s,
          isPartnershipAdsSecondIdentitySelected: u,
          isPartnershipAdsToggleOn: a,
          isSuggestedPostSelected: v,
        }),
        R = Te(n),
        L =
          t ===
            o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
              .PARTNER_CONTENT ||
          r("isTruthy")(n == null ? void 0 : n.has_sponsors)
            ? "BC"
            : "NON_BC",
        E =
          t ===
          o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE.PARTNER_CONTENT
            ? "sponsor_boost"
            : "creator_boost";
      a && (E = i === "SPONSOR_BOOST" ? "sponsor_boost" : "creator_boost");
      var k = R + "[" + E + "] " + L,
        I = {
          eventName: m,
          data:
            ((C = {}),
            (C.is_enabled = e),
            (C.custom_event_type = t),
            (C.source = k),
            (C.message = JSON.stringify(b)),
            (C.prior_data = JSON.stringify(
              babelHelpers.extends({}, Object.fromEntries(S), {
                media_id: n == null ? void 0 : n.id,
                ccr_score:
                  (h =
                    n == null || (y = n.partnership_ads_identities) == null
                      ? void 0
                      : y.ccr_score) != null
                    ? h
                    : null,
                selected_partnership_content_tab: _,
                business_asset_page_id: r("isFalsey")(f) ? null : f,
                business_asset_instagram_user_id:
                  r("isTruthy")(g) && r("isFalsey")(f) ? g : null,
              }),
            )),
            (C.adgroup_id = d != null ? d.id : null),
            C),
          eventCategory: "user_action",
        };
      (v && m === "select_post_table_row" && we(I, p),
        p
          ? r("AdsInterfacesLogger").logOnce(I)
          : r("AdsInterfacesLogger").log(I));
    }
    function we(e, t) {
      t === void 0 && (t = !1);
      var n = babelHelpers.extends({}, e, {
        eventName: "select_post_table_row_suggested_pa",
      });
      t ? r("AdsInterfacesLogger").logOnce(n) : r("AdsInterfacesLogger").log(n);
    }
    function Ae(e) {
      var t = e.isMultipleMentionsPostSelected,
        n = e.isPartnerIdentitySelectedInPostPicker,
        r = e.isPartnershipAdsFirstIdentitySelected,
        o = e.isPartnershipAdsSecondIdentitySelected,
        a = e.isPartnershipAdsToggleOn,
        i = e.isSuggestedPostSelected,
        l = new Map();
      return (
        l.set("isPartnershipAdsToggleOn", a),
        a === !0 &&
          (r != null && l.set("isPAFirstIdentitySelected", r),
          o != null && l.set("isPASecondIdentitySelected", o)),
        n != null && l.set("isPartnerIdentitySelectedInPostPicker", n),
        t != null && l.set("isMultipleMentionsPostSelected", t),
        i != null && l.set("isSuggestedPostSelected", i),
        l
      );
    }
    function Fe() {
      return m();
    }
    function Oe(e, t, n, r, a) {
      return e.length %
        o("AdsUseExistingPostModalConstants").DATA_LAYER.POST_FETCH_LIMIT ===
        0 && e.length > 0
        ? !0
        : (t && n) || (r && a);
    }
    function Be(e) {
      return e.is_instagram_post === !0 && e.media_source_type === "REEL";
    }
    function We(e) {
      return e.is_instagram_post === !0 && e.media_source_type === "STORY";
    }
    function qe(e) {
      return e.is_fb_reels === !0;
    }
    function Ue(e) {
      return (e == null ? void 0 : e.is_instagram_post) === !0;
    }
    function Ve(e) {
      return (e == null ? void 0 : e.is_fb_live_videos) === !0;
    }
    function He(e) {
      var t,
        n = (t = e == null ? void 0 : e.type) != null ? t : "NO_BUTTON",
        r = ["VISIT_PROFILE", "NO_BUTTON"];
      return r.includes(n);
    }
    function Ge(e) {
      var t,
        n,
        r =
          (t = e == null || (n = e.data[0]) == null ? void 0 : n.type) != null
            ? t
            : "";
      return o(
        "AdsExistingPostCTAUtils",
      ).hasSupportedPostAttachmentTypeForUnifiedProfileVisitsObjective(r);
    }
    ((l.getFilterErrors = g),
      (l.getFilterSesameErrors = h),
      (l.filterInstagramPostIneligibilityErrors = y),
      (l.addFBReelWithCopyrightMusicErrors = C),
      (l.addFBReelWithCopyrightMusicSwapAgainErrors = b),
      (l.isVisible = A),
      (l.isVisibleForInstagram = F),
      (l.isVisibleInstagramOrganicPost = O),
      (l.isSesamePAFixesEnabled = Z),
      (l.isSesamePartnershipAdContext = ee),
      (l.isSesameEligible = te),
      (l.isLvaAppInstallSesameEligible = re),
      (l.isLvaAppInstallSesameEnabled = oe),
      (l.isPostFromPromodeProfile = ae),
      (l.isSesameExcludedDestination = o(
        "AdsSesameEligibilityUtils",
      ).isSesameExcludedDestination),
      (l.isSesamePartnershipAdPost = o(
        "AdsSesameEligibilityUtils",
      ).isSesamePartnershipAdPost),
      (l.getSesameEnabled = ie),
      (l.isPostLoaded = le),
      (l.isVideoPost = ue),
      (l.getEffectivePagePostCallToAction = ce),
      (l.getEffectivePagePostCTA = de),
      (l.isNativeVideoPost = pe),
      (l.getNativeVideoID = fe),
      (l.fetchAccessTokensForPageIDs = ge),
      (l.convertTypeToCreativeObjectType = he),
      (l.translatePostType = ye),
      (l.generatePagePostId_BROKEN = Ce),
      (l.getSelectedFacebookPagePostID = be),
      (l.maybeGetPostIdFromPagePostId = ve),
      (l.getPagePostURL_BROKEN = Se),
      (l.getProfilePlusPostURL = Re),
      (l.getPagePostURLForDCO = Le),
      (l.getURLParamsForDCO = Ee),
      (l.getPostIdBestGuess_BROKEN = ke),
      (l.getPostSource = Te),
      (l.onConfirmLog = De),
      (l.onClickLog = xe),
      (l.onCreateNewPagePostClickLog = $e),
      (l.onPostsFetchedLog = Pe),
      (l.onSearchByEnterLog = Ne),
      (l.postTableRowLog = Me),
      (l.getPartnershipAdsPriorDataForLogging = Ae),
      (l.getSubSessionID = Fe),
      (l.shouldShowExtraRowInTable = Oe),
      (l.isPostIGReel = Be),
      (l.isPostIGStory = We),
      (l.isPostFBReel = qe),
      (l.isIGPost = Ue),
      (l.isFBLiveVideo = Ve),
      (l.getPageIdFromPagePostId_BROKEN =
        o("AdsPagePostIDUtils").getPageIdFromPagePostId_BROKEN),
      (l.getPostIdFromPagePostId_BROKEN =
        o("AdsPagePostIDUtils").getPostIdFromPagePostId_BROKEN),
      (l.isPagePostId_BROKEN = o("AdsPagePostIDUtils").isPagePostId_BROKEN));
  },
  226,
);
