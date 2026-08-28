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
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUnifiedProfileVisitUtils",
    "AdsUseExistingPostModalConstants",
    "ApiAdObjectTypes",
    "BrandedContentAdsUtils",
    "ClickToMessageCTXMDFeatureGating",
    "FBLogger",
    "LiveVideoPostUtil",
    "err",
    "getByPath",
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
    var m = ["entities", "links", "length"];
    function p(e) {
      return r("isFalsey")(e) ? null : typeof e != "string" ? e.toString() : e;
    }
    var _ = (function () {
      var e = 0;
      return function () {
        return e++;
      };
    })();
    function f(e) {
      return r("isFalsey")(e) || e === r("AdsLoadState_LEGACY").LOADING
        ? null
        : e;
    }
    var g = [
        2016092, 2016093, 2016111, 2016098, 2016101, 2016113, 2016148, 2016147,
        3858146, 2016149,
      ],
      h = 1815390;
    function y(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
      (l === void 0 && (l = !1),
        c === void 0 && (c = !1),
        d === void 0 && (d = !1),
        m === void 0 && (m = !0),
        p === void 0 && (p = null));
      var _ = [];
      return (
        R(e, t, _),
        L(e, n, t, i, _),
        E(e, a, _, m),
        k(e, a, _, m),
        I(e, a, i, _),
        T(e, _),
        D(e, l, _),
        x(e, t, s, l, _),
        $(e, o, _),
        P(e, _),
        N(e, t, _, c),
        M(e, _),
        w(e, t, _),
        A(e, s, _),
        F(e, s, _),
        O(e, t, u, _, s, p),
        d && (v(e, _), S(e, _)),
        _
      );
    }
    function C(e) {
      return e.filter(function (e) {
        return !g.includes(Number(e.key));
      });
    }
    function b(e) {
      return e.filter(function (e) {
        return Number(e.key) !== h;
      });
    }
    var v = function (t, n) {
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
      S = function (t, n) {
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
      R = function (t, n, o) {
        !ye(t) &&
          n === r("AdsAPIObjectives").VIDEO_VIEWS &&
          o.push(
            new (r("AdsError"))(
              2016092,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This post isn't compatible with the current campaign objective. Please enter an ID for a post that has a video or choose a different objective.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      L = function (t, n, o, a, i) {
        if (
          !U(t, n) &&
          (o === r("AdsAPIObjectives").LINK_CLICKS ||
            o === r("AdsAPIObjectives").CONVERSIONS)
        ) {
          var e = r("getByPath")(t, ["call_to_action", "type"], "NO_BUTTON");
          e === "NO_BUTTON" &&
            (a !== !0
              ? i.push(
                  new (r("AdsError"))(
                    2016093,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "This campaign is using the traffic \/ conversion objective, so you need to add a URL for the destination you want to promote.",
                      );
                    }, {}),
                    { level: r("AdsError").Level.RECOMMEND },
                  ),
                )
              : i.push(
                  new (r("AdsError"))(
                    2016111,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "When you choose a traffic or conversion objective, the post you select needs to include a URL. You can add a URL to the existing post or create a new ad.",
                      );
                    }, {}),
                    { level: r("AdsError").Level.RECOMMEND },
                  ),
                ));
        }
      },
      E = function (t, n, a, i) {
        if (
          o(
            "AdsUEditorMessagingDestinationUtils",
          ).isClickToMessageAdDestination(n)
        ) {
          var e = j(t),
            l = Q(t),
            s = X(t),
            c = Y(t),
            d =
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isMultiDestinationWithWhatsApp(n) && l,
            m = r("getByPath")(t, ["attachments", "data", "0", "type"], ""),
            p = r("getByPath")(t, ["status_type"], ""),
            _ = o(
              "AdsExistingPostCTAUtils",
            ).hasSupportedPostAttachmentTypeForMessagesObjective(m, p);
          if (
            (n === r("AdCampaignDestination").MESSENGER ||
              o(
                "AdsUEditorMessagingDestinationUtils",
              ).isMultiDestinationWithMessenger(n)) &&
            !e &&
            !d
          )
            if (_) {
              if (
                !(
                  c &&
                  (i || G(t, "MESSAGE_PAGE")) &&
                  o(
                    "ClickToMessageCTXMDFeatureGating",
                  ).isCTXPostCTARelaxationEnabled()
                )
              ) {
                var g = new (r("AdsError"))(
                  2016098,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "This post needs to include a call-to-action button in the ad that lets people message you. Select Send message from the Call to Action menu.",
                    );
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                );
                a.push(g);
              }
            } else {
              var f = new (r("AdsError"))(
                2016144,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "Certain types of posts, such as posts with only text, can\u2019t be used for your ad that clicks to message. Try adding media, like a photo or video, to use this post for your ad.",
                  );
                }, {}),
                { level: r("AdsError").Level.WARN },
              );
              a.push(f);
            }
          if (
            (n === r("AdCampaignDestination").WHATSAPP ||
              n ===
                r("AdCampaignDestination")
                  .MESSAGING_INSTAGRAM_DIRECT_WHATSAPP) &&
            !(
              l ||
              (c &&
                (i || G(t, "WHATSAPP_MESSAGE")) &&
                o(
                  "ClickToMessageCTXMDFeatureGating",
                ).isCTXPostCTARelaxationEnabled())
            )
          ) {
            var h = new (r("AdsError"))(
              2016101,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This post needs to include a call-to-action button in the ad that lets people message you on WhatsApp. Select Send WhatsApp message from the Call to Action menu.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            a.push(h);
          }
          if (
            n === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
            !(
              s ||
              (c &&
                (i || G(t, "INSTAGRAM_MESSAGE")) &&
                o(
                  "ClickToMessageCTXMDFeatureGating",
                ).isCTXPostCTARelaxationEnabled())
            )
          ) {
            var y = new (r("AdsError"))(
              2016113,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This post needs to include a call-to-action button in the ad that lets people message you. Select Send message from the Call to Action menu.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            a.push(y);
          }
        }
      },
      k = function (t, n, a, i) {
        if (
          n === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT &&
          !(
            X(t) ||
            (Y(t) &&
              (i || G(t, "INSTAGRAM_MESSAGE")) &&
              o(
                "ClickToMessageCTXMDFeatureGating",
              ).isCTXPostCTARelaxationEnabled())
          )
        ) {
          var e = new (r("AdsError"))(
            2016113,
            u._(function (e, t) {
              return e._(
                /*BTDS*/ "This post needs to include a call-to-action button in the ad that lets people message you. Select Send message from the Call to Action menu.",
              );
            }, {}),
            { level: r("AdsError").Level.WARN },
          );
          a.push(e);
        }
      },
      I = function (t, n, a, i) {
        if (
          o(
            "AdsUnifiedProfileVisitUtils",
          ).getUnifiedProfileVisitsDestinationContainsFB(n)
        )
          if (Ze(t)) {
            if (!Je(t)) {
              var l =
                a === !0
                  ? new (r("AdsError"))(
                      2016148,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "This post needs a Visit Profile call-to-action button to bring people to your Facebook Profile. Please select a different post or create a new one.",
                        );
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    )
                  : new (r("AdsError"))(
                      2016147,
                      u._(function (e, t) {
                        return e._(
                          /*BTDS*/ "This post needs a Visit Page call-to-action button to bring people to your Facebook Page. Please select a different post or create a new one.",
                        );
                      }, {}),
                      { level: r("AdsError").Level.WARN },
                    );
              i.push(l);
            }
          } else {
            var e = new (r("AdsError"))(
              3858463,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "This post\u2019s media type is ineligible. Please select a post with different media or create a new one.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            );
            i.push(e);
          }
      },
      T = function (t, n) {
        ge(t) &&
          n.push(
            new (r("AdsError"))(
              2016094,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Events posted on your Page currently can't be used as ads. Please select a post that isn't an event.",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      D = function (t, n, o) {
        if (n && t.has_sponsors_with_boost_permission === !1) {
          var e;
          o.push(
            new (r("AdsError"))(
              1946076,
              u._(
                function (e, t) {
                  return e._(
                    /*BTDS*/ "If you publish this ad, {postCreator} will receive a notification to approve it. Your ad will run once it's been approved.",
                    [e._param("postCreator", t.postCreator)],
                  );
                },
                { postCreator: (e = t.from) == null ? void 0 : e.name },
              ),
              { level: r("AdsError").Level.RECOMMEND },
            ),
          );
        }
      },
      x = function (n, o, a, i, l) {
        var t = r("AdsAppUtils").isAppEngagementObjective(o, a);
        if (o === r("AdsAPIObjectives").APP_INSTALLS || t || e(o, a))
          if (!ce(n))
            l.push(
              new (r("AdsError"))(
                2016110,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "The selected objective only supports posts that were published on Facebook or Instagram. Please select a different post",
                  );
                }, {}),
                { level: r("AdsError").Level.WARN },
              ),
            );
          else {
            var s = o === r("AdsAPIObjectives").APP_INSTALLS && !J(n),
              c = t && !Z(n, i);
            (c || s) &&
              l.push(
                new (r("AdsError"))(
                  2016031,
                  u._(
                    function (e, t) {
                      return e._(
                        /*BTDS*/ "The selected objective doesn't support ads including {mediaType}.",
                        [e._param("mediaType", t.mediaType)],
                      );
                    },
                    { mediaType: n.type },
                  ),
                  { level: r("AdsError").Level.WARN },
                ),
              );
          }
      },
      $ = function (t, n, o) {
        n === r("AdsBuyingTypes").RESERVED &&
          ee(t) &&
          o.push(
            new (r("AdsError"))(
              1885605,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Messenger destination is unsupported in the reservation buying ad. Please edit your ad and change to a different destination (e.g. website URL).",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      P = function (t, n) {
        me(t) &&
          n.push(
            new (r("AdsError"))(
              2016096,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "You selected a post that includes an expired offer. Please select a post with an active offer.",
                );
              }, {}),
              { level: r("AdsError").Level.RECOMMEND },
            ),
          );
      },
      N = function (t, n, o, a) {
        a ||
          (!ye(t) &&
            n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
            o.push(
              new (r("AdsError"))(
                3167001,
                u._(function (e, t) {
                  return e._(
                    /*BTDS*/ "The campaign objective you chose requires a past live video. Please choose a live video post or a different objective.",
                  );
                }, {}),
                { level: r("AdsError").Level.WARN },
              ),
            ));
      },
      M = function (t, n) {
        if (
          r("justknobx")._("3382") &&
          ye(t) &&
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
              ? new (r("AdsError"))(
                  3858491,
                  c._(
                    /*BTDS*/ "Live video ads are not available for this ad account. Please use a different ad account.",
                  ),
                  {
                    helpCenterID: "615810221411530",
                    level: r("AdsError").Level.WARN,
                  },
                )
              : new (r("AdsError"))(
                  3858490,
                  c._(
                    /*BTDS*/ "Live video ads are not available for this Page. Please use a different Page to create an ad.",
                  ),
                  {
                    helpCenterID: "615810221411530",
                    level: r("AdsError").Level.WARN,
                  },
                ),
          );
        }
        o("LiveVideoPostUtil").isLiveVideoAndEligibleForUsabilityFix(t) &&
          n.push(
            new (r("AdsError"))(
              3858491,
              c._(/*BTDS*/ "You can choose this live video for your ad."),
              { level: r("AdsError").Level.SUCCESS },
            ),
          );
      },
      w = function (t, n, o) {
        if (ye(t) && n === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) {
          var e = t == null ? void 0 : t.live_video_eligibility;
          e
            ? e.includes("INELIGIBLE_NOT_LIVE_VIDEO") &&
              o.push(
                new (r("AdsError"))(
                  3167001,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "The campaign objective you chose requires a past live video. Please choose a live video post or a different objective.",
                    );
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                ),
              )
            : o.push(
                new (r("AdsError"))(
                  3198001,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "Your past live video will convert into a live shopping video format for the ad. This format highlights products from your catalog next to the live video.",
                    );
                  }, {}),
                  { level: r("AdsError").Level.RECOMMEND },
                ),
              );
        }
      },
      A = function (t, n, o) {
        n === r("AdsPromotedObjectTypes").PHONE_CALL &&
          !K(t) &&
          o.push(
            new (r("AdsError"))(
              3858146,
              u._(function (e, t) {
                return e._(
                  /*BTDS*/ "Post click to action must be call now to create call ads",
                );
              }, {}),
              { level: r("AdsError").Level.WARN },
            ),
          );
      },
      F = function (t, n, o) {
        if (n === r("AdsPromotedObjectTypes").ON_AD) {
          var e = ["photo", "video"],
            a =
              r("getByPath")(t, ["attachments", "data", "0", "type"], "") ===
              "profile_media",
            i = t.type;
          (a ||
            (!e.includes(i) && !(t.type === "album" && r("gkx")("16451")))) &&
            o.push(
              new (r("AdsError"))(
                2016031,
                u._(
                  function (e, t) {
                    return e._(
                      /*BTDS*/ "The selected objective doesn't support ads including {mediaType}.",
                      [e._param("mediaType", t.mediaType)],
                    );
                  },
                  { mediaType: a ? "profile picture" : i },
                ),
                { level: r("AdsError").Level.WARN },
              ),
            );
          var l = [
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
            s = r("getByPath")(t, ["call_to_action", "type"], "NO_BUTTON");
          l.includes(s) ||
            o.push(
              new (r("AdsError"))(
                2016036,
                u._(
                  function (e, t) {
                    return e._(
                      /*BTDS*/ "The selected objective doesn't support Call to Action type: {ctaType}.",
                      [e._param("ctaType", t.ctaType)],
                    );
                  },
                  { ctaType: s },
                ),
                { level: r("AdsError").Level.WARN },
              ),
            );
        }
      },
      O = function (n, o, a, i, l, s) {
        (l === void 0 && (l = null), s === void 0 && (s = null));
        var t = e(o, l);
        if (
          !(o !== r("AdsAPIObjectives").APP_INSTALLS && !t) &&
          !(!t && !r("gkx")("5824"))
        ) {
          var c = r("getByPath")(n, ["call_to_action", "type"], "NO_BUTTON");
          if (c !== "NO_BUTTON") {
            var d = r("getByPath")(n, ["call_to_action", "value", "link"], ""),
              m = r("AdsAppUrlUtils").removeReferrerTag(d);
            if (t) {
              var p = [].concat(s != null ? s : [], a != null ? [a] : []);
              p.length > 0 &&
                m !== "" &&
                r("AdsAppUrlUtils").isAppStoreURL(m) &&
                !p.some(function (e) {
                  return r("AdsAppUrlUtils").removeReferrerTag(e) === m;
                }) &&
                i.push(
                  new (r("AdsError"))(
                    2016149,
                    u._(function (e, t) {
                      return e._(
                        /*BTDS*/ "You can\u2019t select this post because it has a call to action that promotes a different app.",
                      );
                    }, {}),
                    { level: r("AdsError").Level.WARN },
                  ),
                );
              return;
            }
            m !== r("AdsAppUrlUtils").removeReferrerTag(a) &&
              i.push(
                new (r("AdsError"))(
                  2016149,
                  u._(function (e, t) {
                    return e._(
                      /*BTDS*/ "You can\u2019t select this post because it has a call to action that promotes a different app.",
                    );
                  }, {}),
                  { level: r("AdsError").Level.WARN },
                ),
              );
          }
        }
      };
    function B(e, t, n, r, o, a, i, l) {
      return (
        l === void 0 && (l = !1),
        y(e, t, n, r, o, a, null, !1, i, null, l).length === 0
      );
    }
    function W(e, t) {
      return !de(t) && !_e(t);
    }
    function q(e, t, n) {
      return e === r("AdsAPIObjectives").VIDEO_VIEWS && t.type !== "video"
        ? !1
        : t.has_sponsors &&
            n ===
              o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
                .PARTNER_CONTENT &&
            t.is_story
          ? o(
              "AdsInstagramBrandedContentUtils",
            ).isValidIgBrandedContentStoryObjective(e)
          : !0;
    }
    function U(e, t) {
      return (
        e.type !== "offer" &&
        !(
          e.type === "photo" && t === r("AdsAPIOptimizationGoals").LINK_CLICKS
        ) &&
        (!!e.link || r("getByPath")(e, m) > 0)
      );
    }
    function V(e, t, n) {
      n === void 0 && (n = !1);
      var a = r("getByPath")(e, ["call_to_action", "type"], "NO_BUTTON"),
        i =
          n && fe(e) && r("justknobx")._("1637")
            ? r("getByPath")(e, ["attachment_call_to_action", "type"], null)
            : null,
        l = i != null && i !== a ? i : a,
        s = t.includes(l),
        u = r("getByPath")(e, ["attachments", "data", "0", "type"], ""),
        c = r("getByPath")(e, ["status_type"], ""),
        d = o(
          "AdsExistingPostCTAUtils",
        ).hasSupportedPostAttachmentTypeForMessagesObjective(u, c);
      return s && (d || pe(e));
    }
    function H(e, t) {
      var n = r("getByPath")(
        e,
        ["call_to_action", "value", "app_destination"],
        "",
      );
      return t.includes(n);
    }
    function G(e, t) {
      return (
        fe(e) &&
        r("justknobx")._("1637") &&
        r("getByPath")(e, ["attachment_call_to_action", "type"], null) === t
      );
    }
    function z(e, t) {
      var n = V(e, t),
        r = V(e, t, !0);
      return n !== r &&
        o("ClickToMessageCTXMDFeatureGating").isCTXPostCTARelaxationEnabled()
        ? r
        : n;
    }
    function j(e) {
      var t = ["MESSAGE_PAGE", "NO_BUTTON"],
        n = ["MESSENGER"],
        r = z(e, t),
        o = H(e, n);
      return r || o;
    }
    function K(e) {
      var t = ["CALL_NOW", "NO_BUTTON"];
      return V(e, t);
    }
    function Q(e) {
      var t = ["WHATSAPP_MESSAGE", "NO_BUTTON"];
      return z(e, t);
    }
    function X(e) {
      var t = ["INSTAGRAM_MESSAGE", "NO_BUTTON"];
      return z(e, t);
    }
    function Y(e) {
      var t = ["WHATSAPP_MESSAGE", "MESSAGE_PAGE", "INSTAGRAM_MESSAGE"];
      return V(e, t, !0);
    }
    function J(e) {
      var t,
        n = r("gkx")("22335"),
        o =
          (t = r("getByPath")(e, ["app_installs_eligibility"])) != null
            ? t
            : !1,
        a = pe(e) && e.type === "photo";
      return (n ? o && !_e(e) : o) || a;
    }
    function Z(e, t) {
      var n,
        o =
          (n = r("getByPath")(e, ["app_engagement_eligibility"])) != null
            ? n
            : !1,
        a = pe(e),
        i = a && e.type === "photo";
      return t && o && a && r("getByPath")(e, ["type"], !1) !== "photo"
        ? !0
        : o || i;
    }
    function ee(e) {
      var t = ["MESSAGE_PAGE", "WHATSAPP_MESSAGE"];
      return V(e, t);
    }
    function te(e) {
      return e === "APP_INSTALLS" || e === "OUTCOME_APP_PROMOTION";
    }
    function ne(e, t, n) {
      var o,
        a =
          (o = r("getByPath")(e, ["is_eligible_for_dark_post"])) != null
            ? o
            : !1;
      return !a || ie(e) ? !1 : se(n, t);
    }
    function re(e) {
      return le(e) ? !1 : r("gkx")("12335");
    }
    function oe(e, t, n) {
      var o,
        a,
        i =
          ((o = r("getByPath")(e, ["is_fb_live_videos"])) != null ? o : !1) ||
          ((a = r("getByPath")(e, ["was_fb_live_videos"])) != null ? a : !1);
      return !i || !te(n) || ie(e) ? !1 : re(t);
    }
    function ae(e, t, n) {
      return !e || !te(n) ? !1 : re(t);
    }
    function ie(e) {
      var t;
      if (e == null) return !1;
      var n = (t = r("getByPath")(e, ["is_owner_promode"])) != null ? t : !1;
      if (n) return !0;
      var o = r("getByPath")(e, ["story_tags"]);
      if (!Array.isArray(o) || o.length === 0) return !1;
      var a = o[0],
        i = r("getByPath")(a, ["type"]);
      return i === "user";
    }
    function le(e) {
      return (
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          e,
        ) ||
        o("AdsUnifiedProfileVisitUtils").getIsUnifiedProfileVisitsDestination(e)
      );
    }
    function se(e, t) {
      var n;
      if (le(t)) return !1;
      if (e === !1) {
        var o;
        return r("gkx")("17231")
          ? !0
          : (o = r("qex")._("1264")) != null
            ? o
            : !1;
      }
      return r("gkx")("17904") ? !0 : (n = r("qex")._("200")) != null ? n : !1;
    }
    function ue(e) {
      var t = f(Le(e)),
        n = f(Ee(e));
      return !r("isFalsey")(t) && !!n;
    }
    function ce(e) {
      return !!e.is_published || !!e.published || !!e.scheduled;
    }
    function de(e) {
      return e.type === "offer";
    }
    function me(e) {
      return de(e) ? e.expiration_timestamp < Date.now() / 1e3 : !1;
    }
    function pe(e) {
      return !!e.sponsor_tags;
    }
    function _e(e) {
      return e.type === "status";
    }
    function fe(e) {
      return e.type === "video";
    }
    function ge(e) {
      return e.type === "event";
    }
    function he(e) {
      if (
        e.attachments &&
        e.attachments.data &&
        e.attachments.data.length > 0 &&
        e.attachments.data[0].target
      )
        return e.attachments.data[0].target.id;
    }
    function ye(e) {
      return (
        fe(e) && ((e.object_id != null && e.object_id !== "") || he(e) != null)
      );
    }
    function Ce(e) {
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
    function be(e) {
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
    function ve(e) {
      switch (e) {
        case "album":
          return c._(/*BTDS*/ "Album");
        case "carousel":
          return c._(/*BTDS*/ "Carousel");
        case "checkin":
          return c._(/*BTDS*/ "Check-In");
        case "multiple":
          return c._(/*BTDS*/ "Multiple");
        case "music":
          return c._(/*BTDS*/ "Music");
        case "event":
          return c._(/*BTDS*/ "Event");
        case "link":
          return c._(/*BTDS*/ "Link");
        case "offer":
          return c._(/*BTDS*/ "Offer");
        case "note":
          return c._(/*BTDS*/ "Note");
        case "photo":
          return c._(/*BTDS*/ "Photo");
        case "status":
          return c._(/*BTDS*/ "Status");
        case "video":
          return c._(/*BTDS*/ "Video");
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
    function Se(e, t) {
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
    function Re(e) {
      var t = p(e);
      if (r("isFalsey")(t)) return !1;
      var n = t.split("_");
      return n.length === 2;
    }
    function Le(e) {
      var t = p(e);
      if (r("isFalsey")(t)) return null;
      var n = t.split("_");
      return (n.length === 2 || d(0, 11830, e), n[0]);
    }
    function Ee(e) {
      var t = p(e);
      if (r("isFalsey")(t)) return null;
      var n = t.split("_");
      return (n.length === 2 || d(0, 11830, e), n[1]);
    }
    function ke(e) {
      return Re(e) ? Ee(e) : e;
    }
    function Ie(e, t) {
      e != null || d(0, 11831, e);
      var n = $e(t);
      return (n != null || d(0, 11832, n), "/" + e + "/posts/" + n);
    }
    function Te(e, t, n, r) {
      r === void 0 && (r = null);
      var o = $e(e);
      o != null || d(0, 11832, o);
      var a = "/" + o;
      return (
        t &&
          ((a = a + "?dco_ad_id=" + n),
          r != null && (a = a + "&dco_ad_token=" + r)),
        a
      );
    }
    function De(e, t, n, r) {
      var o = Ie(e, t),
        a = xe(n, r);
      return o + a;
    }
    function xe(e, t) {
      var n = "?dco_ad_id=" + e,
        r = t != null ? "&dco_ad_token=" + t : "";
      return n + r;
    }
    function $e(e) {
      var t = p(e);
      if (t == null) return null;
      var n = t.split("_");
      return n.length > 2 ? null : n.pop();
    }
    function Pe(e, t) {
      return e ===
        o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE.PARTNER_CONTENT &&
        (t == null ? void 0 : t.is_instagram_post) === !0 &&
        (t == null ? void 0 : t.has_product_tags) === !0
        ? "BCWPT"
        : "";
    }
    function Ne(e) {
      return e == null
        ? ""
        : (e.is_instagram_post ? "IG" : "FB") +
            " " +
            (e.is_story ? "Stories" : "Feed");
    }
    function Me(e) {
      return e == null ? "" : e.type;
    }
    function we(e, t, n, a, i, l, s, u, c, d, m, p) {
      var _,
        f = {
          isBCWithProductTags: Pe(t, n),
          isBrandedContentPost:
            n != null
              ? o("BrandedContentAdsUtils").isBrandedContentPost(n)
              : null,
          isCollabPost:
            n != null ? o("BrandedContentAdsUtils").isCollabPost(n) : null,
          isPartnershipAdsToggleOn: l,
          brandedContentBoostingType: s,
        },
        g = He({
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
          ((_ = {}),
          (_.sub_session_id = e),
          (_.custom_event_type = t),
          (_.source = Ne(n)),
          (_.campaign_destination_type = a),
          (_.objective = i),
          (_.media_format = Me(n)),
          (_.adgroup_id = u != null ? u.id : null),
          (_.message = JSON.stringify(f)),
          (_.prior_data = JSON.stringify(Object.fromEntries(g))),
          _),
        eventName: "post_selector_select_post_confirm_click",
        eventCategory: "user_action",
      });
    }
    function Ae(e, t, n, o, a) {
      var i,
        l = He({
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
    function Fe() {
      r("AdsInterfacesLogger").log({
        eventName: "create_new_page_post_click",
        eventCategory: "user_action",
      });
    }
    function Oe() {
      r("AdsInterfacesLogger").log({
        eventName: "create_new_page_post_confirm",
        eventCategory: "user_action",
      });
    }
    function Be(e, t, n) {
      var r = n.filter(function (e) {
          return e.is_instagram_post === !0;
        }).length,
        o = n.filter(function (e) {
          return e.is_story === !0 && e.is_instagram_post === !0;
        }).length;
    }
    function We() {
      r("AdsInterfacesLogger").log({
        eventName: "post_modal_search_by_enter",
        eventCategory: "user_action",
      });
    }
    function qe(e, t, n, a, i, l, s, u, c, d, m, p, _) {
      var f;
      (m === void 0 && (m = "select_post_table_row"), p === void 0 && (p = !1));
      var g = {
          isBCWithProductTags: Pe(t, n),
          isBrandedContentPost:
            n != null
              ? o("BrandedContentAdsUtils").isBrandedContentPost(n)
              : null,
          isCollabPost:
            n != null ? o("BrandedContentAdsUtils").isCollabPost(n) : null,
        },
        h = o("BrandedContentAdsUtils").isSuggestedPost(n),
        y = He({
          isMultipleMentionsPostSelected: c,
          isPartnerIdentitySelectedInPostPicker: l,
          isPartnershipAdsFirstIdentitySelected: s,
          isPartnershipAdsSecondIdentitySelected: u,
          isPartnershipAdsToggleOn: a,
          isSuggestedPostSelected: h,
        }),
        C = Ne(n),
        b =
          t ===
            o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE
              .PARTNER_CONTENT ||
          r("isTruthy")(n == null ? void 0 : n.has_sponsors)
            ? "BC"
            : "NON_BC",
        v =
          t ===
          o("AdsUseExistingPostModalConstants").NAV_TAB_TYPE.PARTNER_CONTENT
            ? "sponsor_boost"
            : "creator_boost";
      a && (v = i === "SPONSOR_BOOST" ? "sponsor_boost" : "creator_boost");
      var S = C + "[" + v + "] " + b,
        R = {
          eventName: m,
          data:
            ((f = {}),
            (f.is_enabled = e),
            (f.custom_event_type = t),
            (f.source = S),
            (f.message = JSON.stringify(g)),
            (f.prior_data = JSON.stringify(
              babelHelpers.extends({}, Object.fromEntries(y), {
                media_id: n == null ? void 0 : n.id,
                selected_partnership_content_tab: _,
              }),
            )),
            (f.adgroup_id = d != null ? d.id : null),
            f),
          eventCategory: "user_action",
        };
      (h && m === "select_post_table_row" && Ue(R, p),
        p
          ? r("AdsInterfacesLogger").logOnce(R)
          : r("AdsInterfacesLogger").log(R));
    }
    function Ue(e, t) {
      t === void 0 && (t = !1);
      var n = babelHelpers.extends({}, e, {
        eventName: "select_post_table_row_suggested_pa",
      });
      t ? r("AdsInterfacesLogger").logOnce(n) : r("AdsInterfacesLogger").log(n);
    }
    function Ve(e, t, n, o, a) {
      var i,
        l = He({
          isPartnershipAdsToggleOn: n,
          isPartnershipAdsFirstIdentitySelected: o,
          isPartnershipAdsSecondIdentitySelected: a,
        });
      r("AdsInterfacesLogger").log(
        {
          eventName: "post_modal_tab_group_click",
          eventCategory: "user_action",
          data:
            ((i = { custom_event_type: e }),
            (i.prior_data = JSON.stringify(Object.fromEntries(l))),
            (i.adgroup_id = t != null ? t.id : null),
            i),
        },
        r("AdsInterfacesLogger").LOG_TYPE_SECONDARY_APP,
      );
    }
    function He(e) {
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
    function Ge() {
      return _();
    }
    function ze(e, t, n, r, a) {
      return e.length %
        o("AdsUseExistingPostModalConstants").DATA_LAYER.POST_FETCH_LIMIT ===
        0 && e.length > 0
        ? !0
        : (t && n) || (r && a);
    }
    function je(e) {
      return e.is_instagram_post === !0 && e.media_source_type === "REEL";
    }
    function Ke(e) {
      return e.is_instagram_post === !0 && e.media_source_type === "STORY";
    }
    function Qe(e) {
      return e.is_fb_reels === !0;
    }
    function Xe(e) {
      return (e == null ? void 0 : e.is_instagram_post) === !0;
    }
    function Ye(e) {
      return (e == null ? void 0 : e.is_fb_live_videos) === !0;
    }
    function Je(e) {
      var t = r("getByPath")(e, ["call_to_action", "type"], "NO_BUTTON"),
        n = ["VISIT_PROFILE", "NO_BUTTON"];
      return n.includes(t);
    }
    function Ze(e) {
      var t = r("getByPath")(e, ["attachments", "data", "0", "type"], "");
      return o(
        "AdsExistingPostCTAUtils",
      ).hasSupportedPostAttachmentTypeForUnifiedProfileVisitsObjective(t);
    }
    ((l.getFilterErrors = y),
      (l.getFilterSesameErrors = C),
      (l.filterInstagramPostIneligibilityErrors = b),
      (l.addFBReelWithCopyrightMusicErrors = v),
      (l.addFBReelWithCopyrightMusicSwapAgainErrors = S),
      (l.isVisible = B),
      (l.isVisibleForInstagram = W),
      (l.isVisibleInstagramOrganicPost = q),
      (l.isSesameEligible = ne),
      (l.isLvaAppInstallSesameEligible = oe),
      (l.isLvaAppInstallSesameEnabled = ae),
      (l.isPostFromPromodeProfile = ie),
      (l.isSesameExcludedDestination = le),
      (l.getSesameEnabled = se),
      (l.isPostLoaded = ue),
      (l.isVideoPost = fe),
      (l.isNativeVideoPost = ye),
      (l.fetchAccessTokensForPageIDs = Ce),
      (l.convertTypeToCreativeObjectType = be),
      (l.translatePostType = ve),
      (l.generatePagePostId_BROKEN = Se),
      (l.isPagePostId_BROKEN = Re),
      (l.getPageIdFromPagePostId_BROKEN = Le),
      (l.getPostIdFromPagePostId_BROKEN = Ee),
      (l.maybeGetPostIdFromPagePostId = ke),
      (l.getPagePostURL_BROKEN = Ie),
      (l.getProfilePlusPostURL = Te),
      (l.getPagePostURLForDCO = De),
      (l.getURLParamsForDCO = xe),
      (l.getPostIdBestGuess_BROKEN = $e),
      (l.getPostSource = Ne),
      (l.getPostType = Me),
      (l.onConfirmLog = we),
      (l.onClickLog = Ae),
      (l.onCreateNewPagePostClickLog = Fe),
      (l.onCreateNewPagePostConfirmLog = Oe),
      (l.onPostsFetchedLog = Be),
      (l.onSearchByEnterLog = We),
      (l.postTableRowLog = qe),
      (l.onPostModalTabGroupClickLog = Ve),
      (l.getPartnershipAdsPriorDataForLogging = He),
      (l.getSubSessionID = Ge),
      (l.shouldShowExtraRowInTable = ze),
      (l.isPostIGReel = je),
      (l.isPostIGStory = Ke),
      (l.isPostFBReel = Qe),
      (l.isIGPost = Xe),
      (l.isFBLiveVideo = Ye));
  },
  226,
);
