__d(
  "WAWebNewsletterFollowerSelectionFlow.react",
  [
    "$InternalEnum",
    "WAWebModalManager",
    "WAWebNewsletterFollowerInviteWithMessageModal.react",
    "WAWebNewsletterFollowerSelectionModal.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useRef,
      m = n("$InternalEnum").Mirrored(["Selection", "Confirmation"]);
    function p(e) {
      return e.invitees != null && e.invitees.length > 0
        ? m.Confirmation
        : m.Selection;
    }
    function _(e) {
      var t,
        n = p(e),
        a = o("useWAWebFlow").useFlow(n, {
          transitions: o("useWAWebFlow").FlowTransitions.Modal,
        }),
        i = a[0],
        l = a[1],
        u = d((t = e.invitees) != null ? t : []),
        _ = c(
          function (e) {
            var t = e.selectedItems;
            ((u.current = t), l.push(m.Confirmation));
          },
          [l],
        ),
        f = function (t, n) {
          r("WAWebNoop")(t, n);
        };
      if (l.step == null) return null;
      var g;
      switch (l.step) {
        case m.Selection: {
          g = s.jsx(r("WAWebNewsletterFollowerSelectionModal.react"), {
            chat: e.chat,
            onConfirm: _,
            maxInvites: o("WAWebNewsletterGatingUtils").MAX_FOLLOWER_INVITES,
          });
          break;
        }
        case m.Confirmation: {
          g = s.jsx(r("WAWebNewsletterFollowerInviteWithMessageModal.react"), {
            chat: e.chat,
            invitees: u.current,
            onSend: f,
            onClose: o("WAWebModalManager").closeModalManager,
          });
          break;
        }
      }
      return s.jsx(i, { flow: l, children: g });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(_, babelHelpers.extends({}, e)),
        { transition: "modal-flow" },
      );
    }
    l.startFollowerInviteFlow = f;
  },
  98,
);
