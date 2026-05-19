__d(
  "CometDefaultKeyCommands",
  ["fbt", "CometKeys", "UserAgent", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Object.freeze({
        chats: {
          label: s._(/*BTDS*/ "Chat"),
          shortcuts: {
            forwardMessage: {
              command: { key: r("CometKeys").F },
              description: s._(/*BTDS*/ "Forward message"),
              order: 3,
              singleCharDescription: s._(/*BTDS*/ "forward a message"),
            },
            jumpToChatList: {
              command: { alt: !0, command: !0, key: r("CometKeys").C },
              description: s._(/*BTDS*/ "Jump to list of chats"),
              order: 6,
              singleCharDescription: s._(/*BTDS*/ "Jump to the list of chats"),
              triggerFromInputs: !0,
            },
            jumpToMessageList: {
              command: r("UserAgent").isPlatform("Mac OS X")
                ? { alt: !0, key: r("CometKeys").M, shift: !0 }
                : { command: !0, key: r("CometKeys").M, shift: !0 },
              description: s._(/*BTDS*/ "Jump to messages in current chat"),
              order: 7,
              singleCharDescription: s._(
                /*BTDS*/ "Jump to the messages in the current chat",
              ),
              triggerFromInputs: !0,
            },
            likeMessage: {
              command: { key: r("CometKeys").L },
              description: s._(/*BTDS*/ "React to message"),
              order: 1,
              singleCharDescription: s._(/*BTDS*/ "react to a message"),
            },
            newChat: {
              command: { alt: !0, command: !0, key: r("CometKeys").N },
              description: s._(/*BTDS*/ "Create new chat"),
              order: 10,
              singleCharDescription: s._(/*BTDS*/ "Create a new chat"),
              triggerFromInputs: !0,
            },
            nextChatInList: {
              command: { alt: !0, key: r("CometKeys").DOWN },
              description: s._(/*BTDS*/ "Select next chat"),
              order: 8,
              triggerFromInputs: !0,
            },
            previousChatInList: {
              command: { alt: !0, key: r("CometKeys").UP },
              description: s._(/*BTDS*/ "Select previous chat"),
              order: 9,
              triggerFromInputs: !0,
            },
            removeMessage: {
              command: { key: r("CometKeys").X },
              description: s._(/*BTDS*/ "Remove message"),
              order: 4,
              singleCharDescription: s._(/*BTDS*/ "remove a message"),
            },
            replyToMessage: {
              command: { key: r("CometKeys").R },
              description: s._(/*BTDS*/ "Reply to message"),
              order: 2,
              singleCharDescription: s._(/*BTDS*/ "reply to a message"),
            },
            searchMessenger: {
              command: { alt: !0, command: !0, key: r("CometKeys").S },
              description: s._(/*BTDS*/ "Search Messenger"),
              order: 11,
              triggerFromInputs: !0,
            },
            writeMessageToCurrentChat: {
              command: { alt: !0, command: !0, key: r("CometKeys").W },
              description: s._(/*BTDS*/ "Write a message to current chat"),
              order: 5,
              singleCharDescription: s._(
                /*BTDS*/ "Write a message to the current chat",
              ),
              triggerFromInputs: !0,
            },
          },
        },
        global: {
          label: s._(/*BTDS*/ "Global"),
          shortcuts: {
            bugReporting: {
              command: { command: !0, key: r("CometKeys").B },
              description: s._(/*BTDS*/ "Report a problem"),
            },
            search: {
              command: { key: r("CometKeys").SLASH },
              description: s._(/*BTDS*/ "Search Facebook"),
              singleCharDescription: s._(/*BTDS*/ "search Facebook"),
            },
            toggleDarkMode: {
              command: { alt: !0, key: r("CometKeys").M },
              description: s._(/*BTDS*/ "Turn dark mode on or off"),
              isHiddenCommand: r("gkx")("22802") ? void 0 : !0,
            },
            toggleNub: {
              command: { key: r("CometKeys").QUESTION, shift: !0 },
              description: s._(/*BTDS*/ "Show shortcuts"),
            },
            toggleNubFunctionKey: {
              command: { key: r("CometKeys").F1 },
              description: s._(/*BTDS*/ "Show shortcuts"),
            },
          },
        },
        groups: {
          label: s._(/*BTDS*/ "Communities"),
          shortcuts: {
            groupSearch: {
              command: { command: !0, key: r("CometKeys").SLASH },
              description: s._(/*BTDS*/ "Search Communities"),
              order: 6,
            },
            newGroupEvent: {
              command: { key: r("CometKeys").E },
              description: s._(/*BTDS*/ "Create an event"),
              order: 1,
              singleCharDescription: s._(/*BTDS*/ "create an event"),
            },
            viewNextPinnedGroup: {
              command: { alt: !0, key: r("CometKeys").DOWN },
              description: s._(/*BTDS*/ "Next pinned group"),
              order: 5,
            },
            viewNextVideo: {
              command: { alt: !0, key: r("CometKeys").RIGHT },
              description: s._(/*BTDS*/ "Next video"),
              order: 3,
            },
            viewPreviousPinnedGroup: {
              command: { alt: !0, key: r("CometKeys").UP },
              description: s._(/*BTDS*/ "Previous pinned group"),
              order: 4,
            },
            viewPreviousVideo: {
              command: { alt: !0, key: r("CometKeys").LEFT },
              description: s._(/*BTDS*/ "Previous video"),
              order: 2,
            },
          },
        },
        newsfeed: {
          label: s._(/*BTDS*/ "Feed"),
          shortcuts: {
            commentStory: {
              command: { key: r("CometKeys").C },
              description: s._(/*BTDS*/ "Leave a comment"),
              singleCharDescription: s._(/*BTDS*/ "leave a comment"),
            },
            likeStory: {
              command: { key: r("CometKeys").L },
              description: s._(/*BTDS*/ "Like or unlike a post"),
              singleCharDescription: s._(/*BTDS*/ "like or unlike a post"),
            },
            newPost: {
              command: { key: r("CometKeys").P },
              description: s._(/*BTDS*/ "Create a post"),
              singleCharDescription: s._(/*BTDS*/ "create a post"),
            },
            openAttachment: {
              command: { key: r("CometKeys").O },
              description: s._(/*BTDS*/ "Open attachment of post"),
              shouldStopPropagation: !1,
              singleCharDescription: s._(
                /*BTDS*/ "view a post's photo or link",
              ),
            },
            permalink: {
              command: { key: r("CometKeys").ENTER },
              description: s._(/*BTDS*/ "Go to post permalink"),
              isHiddenCommand: r("gkx")("20778") ? void 0 : !0,
              singleCharDescription: s._(/*BTDS*/ "go to post permalink"),
            },
            scrollNext: {
              command: r("gkx")("20778")
                ? r("UserAgent").isPlatform("Mac OS X")
                  ? { fn: !0, key: r("CometKeys").PAGE_DOWN }
                  : { key: r("CometKeys").PAGE_DOWN }
                : { key: r("CometKeys").J },
              description: r("gkx")("20778")
                ? s._(/*BTDS*/ "Jump to the next post")
                : s._(/*BTDS*/ "Jump to the next post"),
              singleCharDescription: r("gkx")("20778")
                ? s._(/*BTDS*/ "Go to the next post")
                : s._(/*BTDS*/ "go to the next post"),
            },
            scrollPrevious: {
              command: r("gkx")("20778")
                ? r("UserAgent").isPlatform("Mac OS X")
                  ? { fn: !0, key: r("CometKeys").PAGE_UP }
                  : { key: r("CometKeys").PAGE_UP }
                : { key: r("CometKeys").K },
              description: r("gkx")("20778")
                ? s._(/*BTDS*/ "Previous post")
                : s._(/*BTDS*/ "Previous post"),
              singleCharDescription: r("gkx")("20778")
                ? s._(/*BTDS*/ "Go back to the previous post")
                : s._(/*BTDS*/ "go back to the previous post"),
            },
            scrollToFeedEnd: {
              command: r("UserAgent").isPlatform("Mac OS X")
                ? { command: !0, fn: !0, key: r("CometKeys").END }
                : { command: !0, key: r("CometKeys").END },
              description: s._(/*BTDS*/ "Jump to Messenger search"),
            },
            scrollToFeedStart: {
              command: r("UserAgent").isPlatform("Mac OS X")
                ? { command: !0, fn: !0, key: r("CometKeys").HOME }
                : { command: !0, key: r("CometKeys").HOME },
              description: s._(/*BTDS*/ "Move focus to the Stories tray"),
            },
            searchContacts: {
              command: { key: r("CometKeys").Q },
              description: s._(/*BTDS*/ "Search Messenger contacts"),
              singleCharDescription: s._(/*BTDS*/ "search Messenger contacts"),
            },
            seeMore: {
              command: r("gkx")("20778")
                ? { alt: !0, key: r("CometKeys").ENTER }
                : { key: r("CometKeys").ENTER },
              description: r("gkx")("20778")
                ? s._(/*BTDS*/ "See more")
                : s._(/*BTDS*/ "See more"),
              singleCharDescription: r("gkx")("20778")
                ? s._(/*BTDS*/ "see more of a post")
                : s._(/*BTDS*/ "see more of a post"),
            },
            shareStory: {
              command: { key: r("CometKeys").S },
              description: s._(/*BTDS*/ "Share post"),
              singleCharDescription: s._(/*BTDS*/ "share a post"),
            },
          },
        },
        photoViewer: {
          label: s._(/*BTDS*/ "Photo albums"),
          shortcuts: {
            fullscreen: {
              command: { key: r("CometKeys").F },
              description: s._(/*BTDS*/ "Enter or exit fullscreen"),
              singleCharDescription: s._(/*BTDS*/ "enter or exit fullscreen"),
            },
            like: {
              command: { key: r("CometKeys").L },
              description: s._(/*BTDS*/ "Like photo"),
              singleCharDescription: s._(/*BTDS*/ "like a photo"),
            },
            viewNext: {
              command: { key: r("CometKeys").K },
              description: s._(/*BTDS*/ "Next photo"),
              singleCharDescription: s._(/*BTDS*/ "see the next photo"),
            },
            viewPrevious: {
              command: { key: r("CometKeys").J },
              description: s._(/*BTDS*/ "Previous photo"),
              singleCharDescription: s._(/*BTDS*/ "see the previous photo"),
            },
          },
        },
        search: {
          label: s._(/*BTDS*/ "Search"),
          shortcuts: {
            scrollNextResult: {
              command: { key: r("CometKeys").J },
              description: s._(/*BTDS*/ "Next result"),
              singleCharDescription: s._(
                /*BTDS*/ "go to the next search result",
              ),
            },
            scrollPreviousResult: {
              command: { key: r("CometKeys").K },
              description: s._(/*BTDS*/ "Previous result"),
              singleCharDescription: s._(
                /*BTDS*/ "go back to the previous search result",
              ),
            },
          },
        },
      }),
      u = e;
    l.default = u;
  },
  226,
);
