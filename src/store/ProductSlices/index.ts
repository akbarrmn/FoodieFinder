import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Meals from "../../models/getMeals";
import ListProduct from "../../models/getListMeals";
import DetailMeals from "../../models/getDetailMeals";

const local_url = import.meta.env.VITE_API_BASE_URL

export const fetchProducts = createAsyncThunk
    ('product/fetchProducts',
        async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: `${local_url}/categories.php`,
                })
                return response.data.categories;
            } catch (error: any) {
                return error?.response.data
            }
        }
    )

export const filterCategories = createAsyncThunk
    ('product/filterCategories',
        async (data: unknown) => {
            try {
                const response = await axios({
                    method: "GET",
                    url: `${local_url}/filter.php?c=${data}`,
                })
                return response.data.meals;
            } catch (error: any) {
                return error?.response.data
            }
        }
    )

export const fetchDetailMeals = createAsyncThunk
    ('product/fetchDetailMeals',
        async (data: unknown) => {
            
            try {
                const response = await axios({
                    method: "GET",
                    url: `${local_url}/lookup.php?i=${data}`,
                })
                return response.data.meals;
            } catch (error: any) {
                return error?.response.data
            }
        }
    )


export const fetchRandomMeals = createAsyncThunk
    ('product/fetchRandomMeals',
        async () => {
            try {
                const response = await axios({
                    method: "GET",
                    url: `${local_url}/search.php?s=a`,
                })  
                return response.data.meals;
            } catch (error: any) {
                return error?.response.data
            }
        }
    )

interface ProductState {
    meals: Meals[]
    detailMeals: DetailMeals[]
    filtered: ListProduct[]
    error: unknown
    loading: boolean
}

const initialState = {
    meals: {},
    filtered: {},
    detailMeals: {},
    loading: false,
    error:null
} as ProductState

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Meals[]>) => {  
                state.loading = false
                state.meals = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            }),

        builder
            .addCase(filterCategories.pending, (state) => {
                state.loading = true
            })
            .addCase(filterCategories.fulfilled, (state, action: PayloadAction<ListProduct[]>) => {  
                state.loading = false
                state.filtered = action.payload
            })
            .addCase(filterCategories.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

        builder
            .addCase(fetchDetailMeals.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchDetailMeals.fulfilled, (state, action: PayloadAction<DetailMeals[]>) => {  
                state.loading = false
                state.detailMeals = action.payload
            })
            .addCase(fetchDetailMeals.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

        builder
            .addCase(fetchRandomMeals.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchRandomMeals.fulfilled, (state, action: PayloadAction<DetailMeals[]>) => {  
                state.loading = false
                state.detailMeals = action.payload
            })
            .addCase(fetchRandomMeals.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

    }
})

export default productSlice.reducer;