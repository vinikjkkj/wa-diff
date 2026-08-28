__d(
  "CometVideoCollaboratorFbtStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Collaborative posts"),
      u = s._(/*BTDS*/ "Sending a collaboration invite"),
      c = [
        s._(
          /*BTDS*/ "If your collaborator accepts, their name will be added to your post and it will be shared on their Page or profile.",
        ),
        s._(
          /*BTDS*/ "Your collaborator will be able to see aggregated insights for this content in Creator Studio.",
        ),
        s._(
          /*BTDS*/ "If your collaborative post is eligible for monetization, earnings will be available only to the primary creator.",
        ),
        s._(
          /*BTDS*/ "You can remove your collaborator anytime. This will remove their name from your post and it won't be shared on their Page or profile.",
        ),
      ],
      d = s._(
        /*BTDS*/ "You can only remove the current collaborator. Once removed, you can no longer add a collaborator to this post.",
      ),
      m = s._(
        /*BTDS*/ "Post is processing. Send an invite directly to your collaborator.",
      ),
      p = s._(/*BTDS*/ "Copy invite link"),
      _ = s._(/*BTDS*/ "Link copied"),
      f = s._(
        /*BTDS*/ "Once your post is created, you can invite your collaborator by sharing this link. The link will be ready after your post is processed.",
      ),
      g = s._(
        /*BTDS*/ "Collaborators can't be added to videos with A\/B testing.",
      ),
      h = s._(/*BTDS*/ "Maximum collaborators added"),
      y = s._(
        /*BTDS*/ "You can't add anymore collaborators to this post. You can remove a collaborator and try again.",
      );
    function C(e) {
      return s._(
        /*BTDS*/ '_j{"*":"{number} collaborators","_1":"1 collaborator"}',
        [s._plural(e, "number")],
      );
    }
    ((l.COLLABORATOR_POPOVER_TITLE = e),
      (l.COLLABORATOR_INVITE_HEADING = u),
      (l.COLLABORATOR_INVITE_CONTENTS = c),
      (l.COLLABORATOR_ADDING_DISABLED = d),
      (l.COLLABORATION_TOAST_MESSAGE = m),
      (l.COLLABORATION_COPY_LINK = p),
      (l.COLLABORATION_COPIED_LINK = _),
      (l.COPY_LINK_TOOLTIP_LABEL = f),
      (l.DISABLE_COLLAB_WHEN_AB_TESTING_SELECTED = g),
      (l.MULTI_COLLABS_MAX_COLLABORATORS_ADDED_ALERT_HEADLINE = h),
      (l.MULTI_COLLABS_MAX_COLLABORATORS_ADDED_ALERT_BODY = y),
      (l.getMultiCollabsReelsComposerCollaboratorMetaText = C));
  },
  226,
);
