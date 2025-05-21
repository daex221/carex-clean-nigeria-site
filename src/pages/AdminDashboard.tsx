
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is a placeholder for the product upload logic
    // In reality, this would be connected to Supabase storage and database
    toast({
      title: "Please Connect Supabase",
      description: "Product upload requires Supabase to be set up for image storage and database.",
      variant: "destructive",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Product <span className="text-carex-blue">Management</span>
          </h1>
          <p className="text-gray-600">
            Add new products to your catalog
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>
                  Fill out the form below to add a new product to your catalog
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input
                      id="productName"
                      placeholder="e.g., Bukleen Car Wash"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      placeholder="e.g., Car Care"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₦)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="e.g., 2500"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Product Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the product..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image</Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                    />
                    <p className="text-sm text-gray-500">
                      Select a clear image of the product. Recommended size: 800x800px.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-carex-green hover:bg-carex-light-green"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Uploading..." : "Add Product"}
                  </Button>

                  <div className="text-center mt-4 text-amber-600 text-sm">
                    Note: This form requires Supabase integration to function properly.
                    Please connect Supabase to enable product uploads.
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Help & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-carex-blue">Product Name</h3>
                    <p className="text-sm text-gray-600">
                      Use a clear, specific name that identifies the product.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-carex-blue">Category</h3>
                    <p className="text-sm text-gray-600">
                      Choose from: Car Care, Kitchen, Laundry, Bathroom, Household.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-carex-blue">Description</h3>
                    <p className="text-sm text-gray-600">
                      Include key features, benefits, and usage instructions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-carex-blue">Images</h3>
                    <p className="text-sm text-gray-600">
                      Use high-quality images with good lighting and a clean background.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
