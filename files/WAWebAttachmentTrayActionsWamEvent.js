__d(
  "WAWebAttachmentTrayActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionThreadTypeType",
    "WAWebWamEnumAttachmentTrayActionTargetType",
    "WAWebWamEnumAttachmentTrayActionType",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumSendMediaTypeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AttachmentTrayActions: [
            3980,
            {
              actionDurationMs: [1, e.TYPES.INTEGER],
              actionThreadType: [
                9,
                o("WAWebWamEnumActionThreadTypeType").ACTION_THREAD_TYPE_TYPE,
              ],
              attachmentTrayAction: [
                2,
                o("WAWebWamEnumAttachmentTrayActionType")
                  .ATTACHMENT_TRAY_ACTION_TYPE,
              ],
              attachmentTrayActionTarget: [
                3,
                o("WAWebWamEnumAttachmentTrayActionTargetType")
                  .ATTACHMENT_TRAY_ACTION_TARGET_TYPE,
              ],
              groupSizeBucket: [
                4,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              isAGroup: [5, e.TYPES.BOOLEAN],
              isSuccessful: [6, e.TYPES.BOOLEAN],
              sendMediaType: [
                7,
                o("WAWebWamEnumSendMediaTypeType").SEND_MEDIA_TYPE_TYPE,
              ],
              sendTime: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AttachmentTrayActions: [] },
      );
    l.AttachmentTrayActionsWamEvent = s;
  },
  98,
);
