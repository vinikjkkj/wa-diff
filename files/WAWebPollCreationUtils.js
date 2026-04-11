__d(
  "WAWebPollCreationUtils",
  ["WAWebProtobufsE2E.pb", "WAWebProtobufsMdStorageMsgRowOpaqueData.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { TEXT: "TEXT", IMAGE: "IMAGE" },
      s = { POLL: "POLL", QUIZ: "QUIZ" };
    function u(t) {
      if (t == null) return e.TEXT;
      switch (t) {
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE:
          return e.IMAGE;
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.TEXT:
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.UNKNOWN:
          return e.TEXT;
      }
    }
    function c(t) {
      switch (t) {
        case e.TEXT:
          return o("WAWebProtobufsE2E.pb").Message$PollContentType.TEXT;
        case e.IMAGE:
          return o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE;
      }
    }
    function d(t) {
      if (t == null) return e.TEXT;
      switch (t) {
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.IMAGE:
          return e.IMAGE;
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.TEXT:
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.UNKNOWN:
          return e.TEXT;
      }
    }
    function m(t) {
      switch (t) {
        case e.TEXT:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollContentType.TEXT;
        case e.IMAGE:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollContentType.IMAGE;
      }
    }
    function p(e) {
      if (e == null) return s.POLL;
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PollType.POLL:
          return s.POLL;
        case o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ:
          return s.QUIZ;
      }
    }
    function _(e) {
      switch (e) {
        case s.POLL:
          return o("WAWebProtobufsE2E.pb").Message$PollType.POLL;
        case s.QUIZ:
          return o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ;
      }
    }
    function f(e) {
      if (e == null) return s.POLL;
      switch (e) {
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollType.POLL:
          return s.POLL;
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollType.QUIZ:
          return s.QUIZ;
      }
    }
    function g(e) {
      switch (e) {
        case s.POLL:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollType.POLL;
        case s.QUIZ:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollType.QUIZ;
      }
    }
    ((l.PollContentType = e),
      (l.PollType = s),
      (l.getPollContentTypeFromE2EValue = u),
      (l.getPollContentTypeAsE2EValue = c),
      (l.getPollContentTypeFromDBValue = d),
      (l.getPollContentTypeAsDBValue = m),
      (l.getPollTypeFromE2EValue = p),
      (l.getPollTypeAsE2EValue = _),
      (l.getPollTypeFromDBValue = f),
      (l.getPollTypeAsDBValue = g));
  },
  98,
);
