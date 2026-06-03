__d(
  "WAWebMexCommunityOwnerUpdateNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebGroupType",
    "WAWebHandleGroupNotification",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][community][notification][owner-update] Failed to process xwa2_notify_group_on_participants_roles_change notification, null ",
              "",
            ])),
          t,
        )
        .tags("mex")
        .sendLogs("mex-communitynotification-owner-update-fail");
    }
    function d(e) {
      if (e != null && e.id != null) {
        var t = e.id,
          n = e.notify_name,
          r = e.pn;
        return {
          authorWid: o("WAWebWidFactory").createWid(t),
          notifyName: n,
          authorPhoneNumber:
            r != null ? o("WAWebWidFactory").createWid(r) : null,
        };
      }
      return { authorWid: null, notifyName: null, authorPhoneNumber: null };
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.xwa2_notify_group_on_participants_roles_change,
            a = n.id,
            i = n.role_updates,
            l = n.update_time,
            m = n.updated_by;
          if (a == null) {
            c("id");
            return;
          }
          if (l == null) {
            c("update_time");
            return;
          }
          var p = d(m),
            _ = p.authorPhoneNumber,
            f = p.authorWid,
            g = p.notifyName,
            h = i[0],
            y = h.new_role,
            C = h.user,
            b = h.user_jid,
            v = C == null ? void 0 : C.jid,
            S = o("WAWebWidFactory").createWid(a),
            R = r("isStringNullOrEmpty")(v) ? b : v,
            L = o("WAWebWidFactory").createUserWidOrThrow(R);
          if (y !== "SUPERADMIN_MEMBER") {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][community][notification][owner-update] Community owner notification received with invalid role ",
                    "",
                  ])),
                y,
              )
              .tags("mex")
              .sendLogs("mex-communitynotification-owner-update-fail");
            return;
          }
          var E = {
              actionType:
                o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE,
              oldOwner: f,
              newOwner: L,
            },
            k = {
              chatId: S,
              ts: o("WATimeUtils").castMilliSecondsToUnixTime(Number(l)),
              actions: [E],
              author: f,
              authorPhoneNumber: _,
              isLidAddressingMode: null,
              pushname: g,
              externalId: e.stanzaId,
              offline: e.offline,
              hasIncompleteParticipantInformation: !1,
            };
          try {
            yield o(
              "WAWebHandleGroupNotification",
            ).handleParsedGroupNotification(k);
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][community][notification][owner-update] Failed to update community owner",
                  ])),
              )
              .tags("mex")
              .sendLogs("mex-communitynotification-owner-update-fail");
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.mexHandleCommunityOwnerUpdate = m;
  },
  98,
);
