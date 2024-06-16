import * as Input from '@/components/form/input'
import * as FileInput from '@/components/form/file-input'
import { SettingTabs } from '@/components/settings-tabs'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as Select from '@/components/form/select'
import { Textarea } from '@/components/form/textarea'
import { Button } from '@/components/Button'
import { CountrySelect } from './country-select'

export default function Home() {
  return (
    <>
      <h1 className="text-zinc-900 text-3xl font-medium dark:text-zinc-100">
        Settings
      </h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-5 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Lucas" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Ezidro" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="lucasezidro7@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <label className="grid gap-3 pt-5 lg:grid-cols-form">
            <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
              Country
            </span>

            <CountrySelect />
          </label>

          <label className="grid gap-3 pt-5 lg:grid-cols-form">
            <span className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100">
              Timezone
            </span>
            <Select.Root name="timezone">
              <Select.Trigger>
                <Select.Value placeholder="Select your timezone..." />
              </Select.Trigger>

              <Select.Content>
                <Select.Item value="utc-3">
                  <Select.ItemText>
                    Pacific Standard Time (PST)
                    <span className="text-sm text-zinc-500">UTC 08:00</span>
                  </Select.ItemText>
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </label>

          <div className="grid gap-3 pt-5 lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="flex flex-col text-sm font-medium leading-relaxed text-zinc-700 dark:text-zinc-100"
            >
              Bio
              <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                Write a short introduction.
              </span>
            </label>
            <div className="flex flex-col gap-3">
              <div className="grid gap-3 lg:grid-cols-2">
                <Select.Root defaultValue="normal">
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>

                  <Select.Content>
                    <Select.Item value="normal">
                      <Select.ItemText>Normal text</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="md">
                      <Select.ItemText>Markdown</Select.ItemText>
                    </Select.Item>
                  </Select.Content>
                </Select.Root>
                <div className="flex items-center gap-1">
                  <Button variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <Link className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <List className="h-4 w-4 text-zinc-400" strokeWidth={3} />
                  </Button>
                  <Button variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-400"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <Textarea
                name="bio"
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
