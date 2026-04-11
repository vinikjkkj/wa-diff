__d(
  "WAWebTransferCommunityOwnershipAction",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebFrontendContactGetters",
    "WAWebMexTransferCommunityOwnershipJob",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      return d(o("WAWebStateUtils").unproxy(e), t);
    }
    function d(e, t, n) {
      var r;
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var a = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Assigning new owner\u2026"),
        ),
        i = {
          group_id: e.id.toString(),
          role_updates: [
            { new_role: "SUPERADMIN_MEMBER", user_jid: t.id.toString() },
          ],
        },
        l =
          ((r = e.groupMetadata) == null ? void 0 : r.isLidAddressingMode) ===
          !0,
        c = o(
          "WAWebMexTransferCommunityOwnershipJob",
        ).mexTransferCommunityOwnershipJob({
          mexInput: i,
          localParentGroupAddressingMode: l,
        }),
        d = function () {
          return new (o("WAWebActionToast.react").ActionType)(
            s._(/*BTDS*/ "You assigned {contact_name} as the new owner.", [
              s._param(
                "contact_name",
                o("WAWebFrontendContactGetters").getFormattedName(t),
              ),
            ]),
          );
        },
        m = c
          .then(function () {
            return d();
          })
          .catch(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ "Could not assign {contact_name} as the new owner.",
                [
                  s._param(
                    "contact_name",
                    o("WAWebFrontendContactGetters").getFormattedName(t),
                  ),
                ],
              ),
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: a,
            pendingAction: m,
          }),
        ),
        c
      );
    }
    l.transferCommunityOwnershipAction = c;
  },
  226,
);
