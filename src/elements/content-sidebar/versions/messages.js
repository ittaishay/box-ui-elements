import { defineMessages } from 'react-intl';

const messages = defineMessages({
    versionsEmpty: {
        id: 'be.sidebarVersions.empty',
        description: 'Message to display when no versions are available',
        defaultMessage: 'No prior versions are available for this file.',
    },
    versionsTitle: {
        id: 'be.sidebarVersions.title',
        description: 'Title for the preview versions sidebar',
        defaultMessage: 'Version History',
    },
    versionCurrent: {
        id: 'be.sidebarVersions.current',
        defaultMessage: 'Current Version',
        description: 'Label for the current version item in the version history list.',
    },
    versionActionDelete: {
        id: 'be.sidebarVersions.delete',
        defaultMessage: 'Delete',
        description: 'Label for the version delete action.',
    },
    versionActionDownload: {
        id: 'be.sidebarVersions.download',
        defaultMessage: 'Download',
        description: 'Label for the version download action.',
    },
    versionActionPreview: {
        id: 'be.sidebarVersions.preview',
        defaultMessage: 'Preview',
        description: 'Label for the version preview action.',
    },
    versionActionPromote: {
        id: 'be.sidebarVersions.promote',
        defaultMessage: 'Make Current',
        description: 'Label for the version promote action.',
    },
    versionActionRestore: {
        id: 'be.sidebarVersions.restore',
        defaultMessage: 'Restore',
        description: 'Label for the version restore action.',
    },
    versionActionToggle: {
        id: 'be.sidebarVersions.toggle',
        defaultMessage: 'Toggle',
        description: 'Label for the version actions dropdown menu toggle button.',
    },
    versionDeletedBy: {
        id: 'be.sidebarVersions.deletedBy',
        defaultMessage: 'Deleted by { name }',
        description: 'Message displayed for a deleted version. {name} is the user who performed the action.',
    },
    versionNumberBadge: {
        defaultMessage: 'V{versionNumber}',
        description: 'Text to display in the version badge.',
        id: 'be.sidebarVersions.versionNumberBadge',
    },
    versionNumberLabel: {
        defaultMessage: 'Version number {versionNumber}',
        description: 'Label given to the version badge for screen readers.',
        id: 'be.sidebarVersions.versionNumberLabel',
    },
    versionRestoredBy: {
        id: 'be.sidebarVersions.restoredBy',
        defaultMessage: 'Restored by { name }',
        description: 'Message displayed for a restored version. {name} is the user who performed the action.',
    },
    versionUploadedBy: {
        id: 'be.sidebarVersions.uploadedBy',
        defaultMessage: 'Uploaded by { name }',
        description: 'Message displayed for an uploaded version. {name} is the user who performed the action.',
    },
    versionUserUnknown: {
        id: 'be.sidebarVersions.versionUserUnknown',
        defaultMessage: 'Unknown',
        description: 'Name displayed for unknown or deleted users.',
    },
});

export default messages;
