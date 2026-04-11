__d(
  "WAWebAck",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        INACTIVE: -6,
        CONTENT_UNUPLOADABLE: -5,
        CONTENT_TOO_BIG: -4,
        CONTENT_GONE: -3,
        EXPIRED: -2,
        FAILED: -1,
        CLOCK: 0,
        SENT: 1,
        RECEIVED: 2,
        READ: 3,
        PLAYED: 4,
        PEER: 5,
      },
      l = {
        NONE: -1,
        MESSAGE_EDIT: 1,
        PIN_IN_CHAT: 2,
        NEWSLETTER_MSG_EDIT: 3,
        SENDER_REVOKE: 7,
        ADMIN_REVOKE: 8,
      },
      s = {
        SENDER: "sender",
        DELIVERY: "delivery",
        READ: "read",
        PLAYED: "played",
        INACTIVE: "inactive",
        READ_SELF: "read-self",
        PLAYED_SELF: "played-self",
      };
    ((i.ACK = e), (i.EDIT_ATTR = l), (i.ACK_STRING = s));
  },
  66,
);
