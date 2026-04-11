__d(
  "WAWebNewsletterRequestReviewReasons",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        {
          value: "UNJUSTIFIED_SUSPENSION",
          getLabel: function () {
            return s._(/*BTDS*/ "This channel shouldn't be closed.");
          },
        },
        {
          value: "MISUNDERSTOOD_UPDATES",
          getLabel: function () {
            return s._(/*BTDS*/ "Some updates were misunderstood.");
          },
        },
        {
          value: "FOLLOWED_GUIDELINES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "This channel follows all Channels Guidelines.",
            );
          },
        },
        {
          value: "ALLOWED_UPDATES",
          getLabel: function () {
            return s._(/*BTDS*/ "Updates like these should be allowed.");
          },
        },
      ],
      u = [
        {
          value: "UNJUSTIFIED_SUSPENSION",
          getLabel: function () {
            return s._(/*BTDS*/ "This channel shouldn't be closed.");
          },
        },
        {
          value: "MISUNDERSTOOD_UPDATES",
          getLabel: function () {
            return s._(/*BTDS*/ "Some statuses were misunderstood.");
          },
        },
        {
          value: "FOLLOWED_GUIDELINES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "This channel follows all Channels Guidelines.",
            );
          },
        },
        {
          value: "ALLOWED_UPDATES",
          getLabel: function () {
            return s._(/*BTDS*/ "Statuses like these should be allowed.");
          },
        },
      ],
      c = [
        {
          value: "CLOSE_CHANNEL",
          getLabel: function () {
            return s._(/*BTDS*/ "This channel should be closed to followers.");
          },
        },
        {
          value: "REMOVE_UPDATE",
          getLabel: function () {
            return s._(/*BTDS*/ "Some updates should be removed.");
          },
        },
        {
          value: "VIOLATES_GUIDELINES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "This channel does not follow all Channels Guidelines.",
            );
          },
        },
        {
          value: "FORBIDDEN_UPDATES",
          getLabel: function () {
            return s._(/*BTDS*/ "Updates like these should not be allowed.");
          },
        },
      ],
      d = [
        {
          value: "CLOSE_CHANNEL",
          getLabel: function () {
            return s._(/*BTDS*/ "This channel should be closed to followers.");
          },
        },
        {
          value: "REMOVE_UPDATE",
          getLabel: function () {
            return s._(/*BTDS*/ "Some channel statuses should be removed.");
          },
        },
        {
          value: "VIOLATES_GUIDELINES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "This channel does not follow all Channels Guidelines.",
            );
          },
        },
        {
          value: "FORBIDDEN_UPDATES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "Channel statuses like these should not be allowed.",
            );
          },
        },
      ],
      m = [
        {
          value: "INAPPROPRIATE_FOLLOWER",
          getLabel: function () {
            return s._(
              /*BTDS*/ "The person who wrote this response should not be allowed to use WhatsApp.",
            );
          },
        },
        {
          value: "REMOVE_RESPONSE",
          getLabel: function () {
            return s._(/*BTDS*/ "This response should be removed.");
          },
        },
        {
          value: "RESPONSE_VIOLATES_GUIDELINES",
          getLabel: function () {
            return s._(
              /*BTDS*/ "This response does not follow all Channels Guidelines.",
            );
          },
        },
        {
          value: "FORBID_SIMILAR_RESPONSES",
          getLabel: function () {
            return s._(/*BTDS*/ "Responses like these should not be allowed.");
          },
        },
      ],
      p = [
        {
          value: "ORIGINAL_MATERIAL",
          getLabel: function () {
            return s._(/*BTDS*/ "This is my original material.");
          },
        },
        {
          value: "LICENSE_OWNER",
          getLabel: function () {
            return s._(/*BTDS*/ "I have a license to use this material.");
          },
        },
        {
          value: "PUBLIC_DOMAIN",
          getLabel: function () {
            return s._(/*BTDS*/ "This material is public domain.");
          },
        },
        {
          value: "FAIR_USE_OR_ALLOWED",
          getLabel: function () {
            return s._(
              /*BTDS*/ "I\u2019m claiming fair use or am otherwise allowed to use this material.",
            );
          },
        },
      ];
    ((l.ENFORCEMENT_APPEAL_REASONS_LIST = e),
      (l.STATUS_ENFORCEMENT_APPEAL_REASONS_LIST = u),
      (l.REPORT_APPEAL_REASON_LIST = c),
      (l.STATUS_REPORT_APPEAL_REASON_LIST = d),
      (l.RESPONSE_REPORT_APPEAL_REASON_LIST = m),
      (l.RM_ENFORCEMENT_APPEAL_REASONS_LIST = p));
  },
  226,
);
