import { IBuildAgent } from '../../core/models'
import {
    GitReleaseManagerSettings,
    CommonFields,
    CreateFields,
    DiscardFields,
    CloseFields,
    OpenFields,
    PublishFields,
    AddAssetFields,
    GitReleaseManagerCreateSettings,
    GitReleaseManagerDiscardSettings,
    GitReleaseManagerCloseSettings,
    GitReleaseManagerOpenSettings,
    GitReleaseManagerPublishSettings,
    GitReleaseManagerAddAssetSettings
} from './models'

export class Settings {
    public static getCreateSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerCreateSettings {
        const milestone = buildAgent.getInput(CreateFields.milestone)
        const name = buildAgent.getInput(CreateFields.name)
        const inputFileName = buildAgent.getInput(CreateFields.inputFileName)
        const isPreRelease = buildAgent.getBooleanInput(
            CreateFields.isPreRelease
        )
        const commit = buildAgent.getInput(CreateFields.commit)
        const assets = buildAgent.getListInput(CreateFields.assets)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            milestone,
            name,
            inputFileName,
            isPreRelease,
            commit,
            assets
        }
    }

    public static getDiscardSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerDiscardSettings {
        const milestone = buildAgent.getInput(DiscardFields.milestone)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            milestone
        }
    }

    public static getCloseSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerCloseSettings {
        const milestone = buildAgent.getInput(CloseFields.milestone)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            milestone
        }
    }

    public static getOpenSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerOpenSettings {
        const milestone = buildAgent.getInput(OpenFields.milestone)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            milestone
        }
    }

    public static getPublishSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerPublishSettings {
        const tagName = buildAgent.getInput(PublishFields.tagName)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            tagName
        }
    }

    public static getAddAssetSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerAddAssetSettings {
        const tagName = buildAgent.getInput(AddAssetFields.tagName)
        const assets = buildAgent.getListInput(AddAssetFields.assets)

        const commonSettings = Settings.getCommonSettings(buildAgent)
        return {
            ...commonSettings,
            tagName,
            assets
        }
    }

    private static getCommonSettings(
        buildAgent: IBuildAgent
    ): GitReleaseManagerSettings {
        const owner = buildAgent.getInput(CommonFields.owner, true)
        const repository = buildAgent.getInput(CommonFields.repository, true)
        const token = buildAgent.getInput(CommonFields.token, true)
        const targetDirectory = buildAgent.getInput(
            CommonFields.targetDirectory
        )

        return {
            owner,
            repository,
            token,
            targetDirectory
        }
    }
}
