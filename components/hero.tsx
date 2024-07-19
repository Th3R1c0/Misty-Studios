'use client';

import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Assets

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

export default function Hero() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center h-full py-20 px-10 w-full bg-muted">
      <div className="flex space-y-8 flex-col items-center text-center">
        <Button
          asChild
          className="not-prose mb-6 flex w-fit"
          size="sm"
          variant="outline"
        >
          <Link href="https://9d8.dev">
            View our reccent builds <ArrowRight className="ml-2 w-4" />
          </Link>
        </Button>
        <h1 className="!mb-0 text-3xl sm:text-5xl">
          <Balancer>Build Your MVP with Confidence</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Our dev agency specializes in building MVPs for clients who
            demonstrate sufficient demand through pre-launch campaigns or
            successful crowdfunding efforts.
          </Balancer>
        </h3>
        <Form {...form}>
          <div className="flex space-x-4">
            {' '}
            <div className="relative inline-flex">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
            </div>
            <div>Accepting 2024 winter batch</div>{' '}
          </div>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 text-left"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-96"
                      placeholder="Enter your email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
        <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
          {/* <Image
          className="not-prose h-full w-full object-cover object-bottom"
          src={Placeholder}
          width={1920}
          height={1080}
          alt="hero image"
          placeholder="blur"
        /> */}
          <div className="w-[1920] h-[1080] bg-blue-200" />
        </div>
        <Button className="text-sm">See Requirements</Button>
      </div>
    </div>
  );
}
