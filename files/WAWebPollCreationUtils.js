__d(
  "WAWebPollCreationUtils",
  ["WAWebProtobufsE2E.pb", "WAWebProtobufsMdStorageMsgRowOpaqueData.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { POLL: "POLL", QUIZ: "QUIZ" },
      s = { TEXT: "TEXT", IMAGE: "IMAGE" };
    function u(e) {
      if (e == null) return s.TEXT;
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE:
          return s.IMAGE;
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.TEXT:
        case o("WAWebProtobufsE2E.pb").Message$PollContentType.UNKNOWN:
          return s.TEXT;
      }
    }
    function c(e) {
      switch (e) {
        case s.TEXT:
          return o("WAWebProtobufsE2E.pb").Message$PollContentType.TEXT;
        case s.IMAGE:
          return o("WAWebProtobufsE2E.pb").Message$PollContentType.IMAGE;
      }
    }
    function d(e) {
      if (e == null) return s.TEXT;
      switch (e) {
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.IMAGE:
          return s.IMAGE;
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.TEXT:
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollContentType.UNKNOWN:
          return s.TEXT;
      }
    }
    function m(e) {
      switch (e) {
        case s.TEXT:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollContentType.TEXT;
        case s.IMAGE:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollContentType.IMAGE;
      }
    }
    function p(t) {
      if (t == null) return e.POLL;
      switch (t) {
        case o("WAWebProtobufsE2E.pb").Message$PollType.POLL:
          return e.POLL;
        case o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ:
          return e.QUIZ;
      }
    }
    function _(t) {
      switch (t) {
        case e.POLL:
          return o("WAWebProtobufsE2E.pb").Message$PollType.POLL;
        case e.QUIZ:
          return o("WAWebProtobufsE2E.pb").Message$PollType.QUIZ;
      }
    }
    function f(t) {
      if (t == null) return e.POLL;
      switch (t) {
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollType.POLL:
          return e.POLL;
        case o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
          .MsgOpaqueData$PollType.QUIZ:
          return e.QUIZ;
      }
    }
    function g(t) {
      switch (t) {
        case e.POLL:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollType.POLL;
        case e.QUIZ:
          return o("WAWebProtobufsMdStorageMsgRowOpaqueData.pb")
            .MsgOpaqueData$PollType.QUIZ;
      }
    }
    ((l.PollType = e),
      (l.PollContentType = s),
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
