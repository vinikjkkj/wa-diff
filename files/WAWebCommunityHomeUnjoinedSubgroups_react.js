__d(
  "WAWebCommunityHomeUnjoinedSubgroups.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebCellFrame.react",
    "WAWebChatCommunityUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoExpandButton.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySpeakerIcon.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFetchUnjoinedGroupsProfilePicsAction",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebPinned2Icon.react",
    "WAWebQueryAndUpdateSubgroupParticipantCountAction",
    "WAWebSingleSelection",
    "WAWebSubgroupJoinModal.react",
    "WAWebUnjoinedGroupsModal.react",
    "WAWebUnjoinedSubgroupComparator",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = {
        viewAllContainer: { height: "xvt47uu", $$css: !0 },
        iconPinned: { color: "xpteuj8", $$css: !0 },
      },
      f = u.jsx(
        "div",
        {
          className: "x1rg5ohu x14z9mp xhslqc4 x16dsc37",
          children: u.jsx(o("WAWebPinned2Icon.react").Pinned2Icon, {
            iconXstyle: _.iconPinned,
          }),
        },
        "icon-pinned",
      );
    function g(e, t, n) {
      var r = p(!1),
        a = r[0],
        i = r[1];
      d(
        function () {
          e.length &&
            !a &&
            o("WAWebFetchUnjoinedGroupsProfilePicsAction")
              .fetchUnjoinedGroupsPicsBatched(e, t, n)
              .then(function () {
                return i(!0);
              });
        },
        [e],
      );
    }
    function h(e, t, n) {
      (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
        e.parentGroupId,
        o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
          .HOME_GROUP_DISCOVERIES,
      ),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(r("WAWebSubgroupJoinModal.react"), {
            subgroupMetadata: e,
            onSuccess: function () {
              (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
                e.parentGroupId,
                o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
                  .HOME_GROUP_JOINS,
              ),
                n == null || n());
            },
            source: t,
          }),
        ));
    }
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(40),
        a = e.chat,
        i = e.onAddNewGroupClick,
        l = e.highlightedSubgroups,
        c = e.mini,
        m = e.type,
        p = l === void 0 ? [] : l,
        f = c === void 0 ? !1 : c,
        y;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = new (r("WAWebSingleSelection"))([], b)), (n[0] = y))
        : (y = n[0]);
      var S = y,
        R =
          o("useWAWebModelValues").useOptionalModelValues(a.groupMetadata, [
            "unjoinedSubgroups",
          ]) || {},
        L = R.unjoinedSubgroups,
        E;
      n[1] !== L
        ? ((E = L === void 0 ? [] : L), (n[1] = L), (n[2] = E))
        : (E = n[2]);
      var k = E,
        I;
      n[3] !== k.length
        ? ((I = s._(
            /*BTDS*/ '_j{"*":"Other groups: {other-groups} groups","_1":"Other groups: 1 group"}',
            [s._plural(k.length, "other-groups")],
          )),
          (n[3] = k.length),
          (n[4] = I))
        : (I = n[4]);
      var T = I;
      g(k, a.id, (t = a.groupMetadata) == null ? void 0 : t.joinedSubgroups[0]);
      var D, x;
      (n[5] !== a || n[6] !== k
        ? ((D = function () {
            var e,
              t,
              n =
                (e =
                  (t = a.groupMetadata) == null
                    ? void 0
                    : t.lastCommunityPollTimestamp) != null
                  ? e
                  : 0,
              i =
                o("WATimeUtils").unixTime() >
                n +
                  o(
                    "WAWebCommunityGatingUtils",
                  ).communityPollIntervalTimeInSeconds(),
              l = !1;
            for (var s of k) {
              var u = r("WAWebUnjoinedSubgroupMetadataCollection").get(s);
              if (u != null && (u.size == null || u.size === 0)) {
                l = !0;
                break;
              }
            }
            var c = i || l;
            if (k.length > 0 && c) {
              var d,
                m =
                  ((d = a.groupMetadata) == null
                    ? void 0
                    : d.joinedSubgroups) != null
                    ? a.groupMetadata.joinedSubgroups[0]
                    : null;
              o(
                "WAWebQueryAndUpdateSubgroupParticipantCountAction",
              ).queryAndUpdateSubgroupParticipantCount(a, m);
            }
          }),
          (x = [k, a]),
          (n[5] = a),
          (n[6] = k),
          (n[7] = D),
          (n[8] = x))
        : ((D = n[7]), (x = n[8])),
        d(D, x));
      var $ = function () {
          var e = k.map(C);
          return r("WAWebUnjoinedSubgroupMetadataCollection")
            .filter(function (t) {
              return e.includes(t.id.toString());
            })
            .sort(r("WAWebUnjoinedSubgroupComparator")(p));
        },
        P = $(),
        N = function () {
          var e = [].concat(P);
          return (
            P.length >
              o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS &&
              (e = e.slice(
                0,
                o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
              )),
            e.reduce(function (e, t) {
              return (
                (f &&
                  t.groupType ===
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) ||
                  e.push({
                    itemKey: t.id.toString(),
                    subgroupMetadata: t,
                    height: 65,
                    shouldHighlight: p.some(function (e) {
                      return t.id.equals(e);
                    }),
                  }),
                e
              );
            }, [])
          );
        };
      S.init(N());
      var M;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = ["change:allowNonAdminSubGroupCreation"]), (n[9] = M))
        : (M = n[9]);
      var w;
      n[10] !== a
        ? ((w = function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(a);
          }),
          (n[10] = a),
          (n[11] = w))
        : (w = n[11]);
      var A = r("useWAWebEventTargetValue")(a.groupMetadata, M, w),
        F;
      n[12] !== f || n[13] !== i || n[14] !== A
        ? ((F =
            A && !f
              ? u.jsx(o("WAWebCommunityCells.react").AddGroupCell, {
                  onClick: i,
                })
              : null),
          (n[12] = f),
          (n[13] = i),
          (n[14] = A),
          (n[15] = F))
        : (F = n[15]);
      var O = F,
        B = N();
      if (O == null && B.length === 0) return null;
      var W;
      n[16] !== p || n[17] !== P || n[18] !== m
        ? ((W = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebUnjoinedGroupsModal.react"), {
                onCancel: o("WAWebModalManager").closeModalManager,
                unjoinedGroups: P,
                onClickGroup: h,
                title: s._(/*BTDS*/ "Groups you can join"),
                type: m,
                highlightedSubgroups: p,
              }),
            );
          }),
          (n[16] = p),
          (n[17] = P),
          (n[18] = m),
          (n[19] = W))
        : (W = n[19]);
      var q = W,
        U;
      n[20] !== q || n[21] !== P.length
        ? ((U =
            P.length >
            o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS
              ? u.jsx(r("WAWebChatInfoExpandButton.react"), {
                  ariaLabel: s._(
                    /*BTDS*/ '_j{"*":"View all unjoined subgroups: {view-all} more groups","_1":"View all unjoined subgroups: 1 more group"}',
                    [
                      s._plural(
                        P.length -
                          o("WAWebChatInfoDrawerSection.react")
                            .INFO_DRAWER_MAX_ROWS,
                        "view-all",
                      ),
                    ],
                  ),
                  xstyle: _.viewAllContainer,
                  numMore:
                    P.length -
                    o("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS,
                  onClick: q,
                  viewAll: !0,
                })
              : null),
          (n[20] = q),
          (n[21] = P.length),
          (n[22] = U))
        : (U = n[22]);
      var V = U,
        H;
      n[23] !== f
        ? ((H = f
            ? s._(/*BTDS*/ "Groups you can join")
            : s._(/*BTDS*/ "Other groups")),
          (n[23] = f),
          (n[24] = H))
        : (H = n[24]);
      var G;
      n[25] !== T
        ? ((G = T.toString()), (n[25] = T), (n[26] = G))
        : (G = n[26]);
      var z;
      n[27] !== S || n[28] !== m
        ? ((z = function (t) {
            return u.jsx(v, { data: t, active: S, type: m });
          }),
          (n[27] = S),
          (n[28] = m),
          (n[29] = z))
        : (z = n[29]);
      var j;
      n[30] !== B || n[31] !== S || n[32] !== G || n[33] !== z
        ? ((j = u.jsx(r("WAWebNavigableFlatList.react"), {
            ariaLabel: G,
            listData: B,
            onRenderItem: z,
            selection: S,
            rotateList: !0,
          })),
          (n[30] = B),
          (n[31] = S),
          (n[32] = G),
          (n[33] = z),
          (n[34] = j))
        : (j = n[34]);
      var K;
      return (
        n[35] !== O || n[36] !== H || n[37] !== j || n[38] !== V
          ? ((K = u.jsxs(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
              { testid: void 0, title: H, children: [O, j, V] },
            )),
            (n[35] = O),
            (n[36] = H),
            (n[37] = j),
            (n[38] = V),
            (n[39] = K))
          : (K = n[39]),
        K
      );
    }
    function C(e) {
      return e.toString();
    }
    function b(e) {
      return e.itemKey;
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(59),
        n = e.active,
        a = e.data,
        i = e.type,
        l = a.shouldHighlight,
        c = a.subgroupMetadata,
        d;
      t[0] !== c.id
        ? ((d = c.id.toString()), (t[0] = c.id), (t[1] = d))
        : (d = t[1]);
      var m = r("useWAWebActiveSelection")(n, d),
        p = m[0],
        _ = m[1],
        g;
      t[2] !== c.subject
        ? ((g = s._(/*BTDS*/ "{subgroup-name}", [
            s._param("subgroup-name", c.subject),
          ])),
          (t[2] = c.subject),
          (t[3] = g))
        : (g = t[3]);
      var y = g,
        C = c.groupType,
        b = c.id,
        v = c.subject,
        S = C === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        R = S ? f : null,
        L;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = ["change:membershipApprovalMode"]), (t[4] = L))
        : (L = t[4]);
      var E;
      t[5] !== c.membershipApprovalMode
        ? ((E = function () {
            return c.membershipApprovalMode;
          }),
          (t[5] = c.membershipApprovalMode),
          (t[6] = E))
        : (E = t[6]);
      var k = r("useWAWebEventTargetValue")(c, L, E),
        I;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = ["change:membershipApprovalRequest"]), (t[7] = I))
        : (I = t[7]);
      var T;
      t[8] !== c.membershipApprovalRequest
        ? ((T = function () {
            return c.membershipApprovalRequest;
          }),
          (t[8] = c.membershipApprovalRequest),
          (t[9] = T))
        : (T = t[9]);
      var D = r("useWAWebEventTargetValue")(c, I, T),
        x;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = ["change:size"]), (t[10] = x))
        : (x = t[10]);
      var $;
      t[11] !== c.size
        ? (($ = function () {
            var e;
            return (e = c.size) != null ? e : 0;
          }),
          (t[11] = c.size),
          (t[12] = $))
        : ($ = t[12]);
      var P = r("useWAWebEventTargetValue")(c, x, $),
        N;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = ["change:hiddenSubgroup"]), (t[13] = N))
        : (N = t[13]);
      var M;
      t[14] !== c.hiddenSubgroup
        ? ((M = function () {
            return c.hiddenSubgroup === !0;
          }),
          (t[14] = c.hiddenSubgroup),
          (t[15] = M))
        : (M = t[15]);
      var w = r("useWAWebEventTargetValue")(c, N, M),
        A = P > 0,
        F;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx("span", {
            className: "xhslqc4 xk50ysn",
            children: s._(/*BTDS*/ "Recently added"),
          })),
          (t[16] = F))
        : (F = t[16]);
      var O = F,
        B;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Announcement group")), (t[17] = B))
        : (B = t[17]);
      var W = B,
        q;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Request sent")), (t[18] = q))
        : (q = t[18]);
      var U = q,
        V;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Request to join")), (t[19] = V))
        : (V = t[19]);
      var H = V,
        G;
      t[20] !== P
        ? ((G = s._(/*BTDS*/ '_j{"*":"{number} members","_1":"1 member"}', [
            s._plural(P, "number"),
          ])),
          (t[20] = P),
          (t[21] = G))
        : (G = t[21]);
      var z = G,
        j;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Invite required")), (t[22] = j))
        : (j = t[22]);
      var K = j,
        Q = null;
      if (S) {
        var X;
        (t[23] !== l
          ? ((X = l
              ? u.jsxs("div", { children: [O, " ", "\u2022", " ", W] })
              : W),
            (t[23] = l),
            (t[24] = X))
          : (X = t[24]),
          (Q = X));
      } else if (w) {
        var Y;
        (t[25] !== l
          ? ((Y = l
              ? u.jsxs("div", { children: [O, " ", "\u2022", " ", K] })
              : K),
            (t[25] = l),
            (t[26] = Y))
          : (Y = t[26]),
          (Q = Y));
      } else if (D) {
        var J;
        (t[27] !== l
          ? ((J = l
              ? u.jsxs("div", { children: [O, " ", "\u2022", " ", U] })
              : U),
            (t[27] = l),
            (t[28] = J))
          : (J = t[28]),
          (Q = J));
      } else if (k) {
        var Z;
        (t[29] !== l
          ? ((Z = l
              ? u.jsxs("div", { children: [O, " ", "\u2022", " ", H] })
              : H),
            (t[29] = l),
            (t[30] = Z))
          : (Z = t[30]),
          (Q = Z));
      } else if (A) {
        var ee;
        (t[31] !== z || t[32] !== l
          ? ((ee = l
              ? u.jsxs("div", { children: [O, " ", "\u2022", " ", z] })
              : z),
            (t[31] = z),
            (t[32] = l),
            (t[33] = ee))
          : (ee = t[33]),
          (Q = ee));
      }
      l && !k && !S && !A && !w && (Q = O);
      var te;
      t[34] !== c || t[35] !== i
        ? ((te = function () {
            h(c, i);
          }),
          (t[34] = c),
          (t[35] = i),
          (t[36] = te))
        : (te = t[36]);
      var ne = te,
        re;
      t[37] !== ne
        ? ((re = { enter: ne, space: ne }), (t[37] = ne), (t[38] = re))
        : (re = t[38]);
      var oe = re,
        ae = v,
        ie = b;
      if (C === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        var le;
        (t[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((le = s._(/*BTDS*/ "Announcements").toString()), (t[39] = le))
          : (le = t[39]),
          (ae = le),
          (ie = c.parentGroupId));
      }
      var se;
      t[40] !== ie || t[41] !== C
        ? ((se =
            C === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? u.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: 40 })
              : u.jsx(o("WAWebDetailImage.react").DetailImage, {
                  size: 40,
                  id: ie,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                  hiddenSubgroupIcon: "chat-list",
                })),
          (t[40] = ie),
          (t[41] = C),
          (t[42] = se))
        : (se = t[42]);
      var ue = se,
        ce;
      t[43] !== y
        ? ((ce = y.toString()), (t[43] = y), (t[44] = ce))
        : (ce = t[44]);
      var de;
      t[45] !== ae
        ? ((de = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: ae,
            ellipsify: !0,
          })),
          (t[45] = ae),
          (t[46] = de))
        : (de = t[46]);
      var me;
      t[47] !== _ ||
      t[48] !== ue ||
      t[49] !== ne ||
      t[50] !== Q ||
      t[51] !== R ||
      t[52] !== de
        ? ((me = u.jsx(r("WAWebCellFrame.react"), {
            theme: "subgroup",
            primary: de,
            secondary: Q,
            image: ue,
            onClick: ne,
            secondaryDetail: R,
            active: _,
          })),
          (t[47] = _),
          (t[48] = ue),
          (t[49] = ne),
          (t[50] = Q),
          (t[51] = R),
          (t[52] = de),
          (t[53] = me))
        : (me = t[53]);
      var pe;
      return (
        t[54] !== oe || t[55] !== p || t[56] !== ce || t[57] !== me
          ? ((pe = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: p,
              handlers: oe,
              "aria-label": ce,
              role: "button",
              children: me,
            })),
            (t[54] = oe),
            (t[55] = p),
            (t[56] = ce),
            (t[57] = me),
            (t[58] = pe))
          : (pe = t[58]),
        pe
      );
    }
    ((l.pinnedIcon = f),
      (l.handleOpenSubgroupModal = h),
      (l.CommunityHomeUnjoinedSubgroups = y));
  },
  226,
);
